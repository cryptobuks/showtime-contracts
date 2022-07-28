// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;


import { console2 } from "forge-std/console2.sol";
import { Test } from "forge-std/Test.sol";
import { ECDSA } from "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";

import { Attestation } from "src/interfaces/IShowtimeVerifier.sol";
import { ShowtimeVerifier } from "src/ShowtimeVerifier.sol";

contract ShowtimeVerifierTest is Test {
    address internal owner;
    address internal signerManager;
    address internal alice;
    address internal bob;

    uint256 internal signerPrivateKey;
    address internal signer;

    uint256 internal badActorPrivateKey;
    address internal badActor;

    ShowtimeVerifier internal verifier;

    Attestation internal attestation;

    // inspired by https://twitter.com/eth_call/status/1549792921976803328
    function mkaddr(string memory name) public returns(uint256 privateKey, address addr) {
        privateKey = uint256(keccak256(bytes(name)));
        addr = vm.addr(privateKey);
        vm.label(addr, name);
    }

    function digest(Attestation memory _attestation) public view returns (bytes32) {
        bytes memory encodedStruct = verifier.encode(_attestation);
        bytes32 structHash = keccak256(abi.encodePacked(verifier.REQUEST_TYPE_HASH(), encodedStruct));
        return keccak256(abi.encodePacked("\x19\x01", verifier.domainSeparator(), structHash));
    }

    function setUp() public {
        (, owner) = mkaddr("owner");
        (, signerManager) = mkaddr("signerManager");
        (, alice) = mkaddr("alice");
        (, bob) = mkaddr("bob");
        (signerPrivateKey, signer) = mkaddr("signer");
        (badActorPrivateKey, badActor) = mkaddr("badActor");

        vm.startPrank(owner);
        verifier = new ShowtimeVerifier(owner);
        verifier.registerSigner(signer, 1);
        verifier.setSignerManager(signerManager);
        vm.stopPrank();

        attestation = Attestation(
            bob,
            address(0),
            block.timestamp,
            block.timestamp + verifier.MAX_ATTESTATION_VALIDITY_SECONDS() / 2
        );
    }

    /*//////////////////////////////////////////////////////////////
                            VERIFICATION LOGIC
    //////////////////////////////////////////////////////////////*/

    function testHappyPath() public {
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, digest(attestation));
        assertTrue(verifier.verify(attestation, abi.encodePacked(r, s, v)));
    }


    function testSignerNotRegistered() public {
        // when signed by a non-registered signer
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(badActorPrivateKey, digest(attestation));

        // then verification fails (with the expected signer)
        vm.expectRevert(abi.encodeWithSignature("UnknownSigner(address)", badActor));
        verifier.verify(attestation, abi.encodePacked(r, s, v));
    }


    function testFailSignatureTamperedWith() public {
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, digest(attestation));

        // when the signature is tampered with
        r = keccak256(abi.encodePacked(r));

        // then verification fails
        verifier.verify(attestation, abi.encodePacked(r, s, v));
    }


    function testExpiredSigner() public {
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, digest(attestation));

        // when we are way out in the future
        vm.warp(block.timestamp + 10000 days);

        // then verification fails
        vm.expectRevert(abi.encodeWithSignature("Expired()"));
        verifier.verify(attestation, abi.encodePacked(r, s, v));
    }


    function testRevokedSigner() public {
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, digest(attestation));

        // when the signer is revoked
        vm.prank(signerManager);
        verifier.revokeSigner(signer);

        // then verification fails
        vm.expectRevert(abi.encodeWithSignature("UnknownSigner(address)", signer));
        verifier.verify(attestation, abi.encodePacked(r, s, v));
    }


    function testArbitraryTypeHash() public {
        string memory newType = "ValentineCard(address from,address to,string message)";
        bytes32 newTypeHash = keccak256(abi.encodePacked(newType));

        bytes memory encodedStruct = abi.encodePacked(
            uint256(uint160(bob)),
            uint256(uint160(alice)),
            keccak256("I love you")
        );

        bytes32 structHash = keccak256(abi.encodePacked(newTypeHash, encodedStruct));
        bytes32 _digest = keccak256(abi.encodePacked("\x19\x01", verifier.domainSeparator(), structHash));

        (uint8 v, bytes32 r, bytes32 s) = vm.sign(signerPrivateKey, _digest);
        assertTrue(verifier.verify(newTypeHash, encodedStruct, abi.encodePacked(r, s, v)));
    }

    /*//////////////////////////////////////////////////////////////
                    ATTESTATION VALIDATION TESTS
    //////////////////////////////////////////////////////////////*/

    function testSignedAtInTheFuture() public {
        // when the signedAt timestamp is in the future
        attestation.signedAt = block.timestamp + 1;

        // then the verification fails
        vm.expectRevert(abi.encodeWithSignature("TemporalAnomaly()"));
        verifier.verify(attestation, "");
    }


    function testExpired() public {
        // when the attestation validUntil timestamp is in the past
        attestation.validUntil = block.timestamp - 1;

        // then the verification fails
        vm.expectRevert(abi.encodeWithSignature("Expired()"));
        verifier.verify(attestation, "");
    }


    function testDeadlineTooLong() public {
        // when the attestation validUntil timestamp is too far in the future
        attestation.validUntil = block.timestamp + verifier.MAX_ATTESTATION_VALIDITY_SECONDS() + 1;

        // then the verification fails
        vm.expectRevert(abi.encodeWithSignature("DeadlineTooLong()"));
        verifier.verify(attestation, "");
    }

    /*//////////////////////////////////////////////////////////////
                            ADMIN TESTS
    //////////////////////////////////////////////////////////////*/

    function testBadActorCanNotRegisterSigner() public {
        vm.prank(badActor);
        vm.expectRevert(abi.encodeWithSignature("Unauthorized()"));
        verifier.registerSigner(badActor, 365);
    }


    function testBadActorCanNotRevokeSigner() public {
        vm.prank(badActor);
        vm.expectRevert(abi.encodeWithSignature("Unauthorized()"));
        verifier.revokeSigner(signer);
    }


    function testBadActorCanNotSetSignerManager() public {
        vm.prank(badActor);
        vm.expectRevert("Ownable: caller is not the owner");
        verifier.setSignerManager(badActor);
    }
}
