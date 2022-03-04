/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "PaymentSplitter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymentSplitter__factory>;
    getContractFactory(
      name: "IERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Burnable__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Holder__factory>;
    getContractFactory(
      name: "ERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "AccessProtected",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessProtected__factory>;
    getContractFactory(
      name: "BaseRelayRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseRelayRecipient__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Burnable__factory>;
    getContractFactory(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Holder__factory>;
    getContractFactory(
      name: "ERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC2981Royalties",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2981Royalties__factory>;
    getContractFactory(
      name: "Hevm",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hevm__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC2981",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC2981__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "PaymentSplitter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PaymentSplitter__factory>;
    getContractFactory(
      name: "ShowtimeMT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMT__factory>;
    getContractFactory(
      name: "ShowtimeMTAccessTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTAccessTest__factory>;
    getContractFactory(
      name: "ShowtimeMTBurningTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTBurningTest__factory>;
    getContractFactory(
      name: "ShowtimeMTERC165Test",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTERC165Test__factory>;
    getContractFactory(
      name: "ShowtimeMTMintingTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTMintingTest__factory>;
    getContractFactory(
      name: "ShowtimeMTRoyaltyTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTRoyaltyTest__factory>;
    getContractFactory(
      name: "ShowtimeMTTransferTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTTransferTest__factory>;
    getContractFactory(
      name: "ShowtimeMTURITest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTURITest__factory>;
    getContractFactory(
      name: "User",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.User__factory>;
    getContractFactory(
      name: "ShowtimeMTReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTReceiver__factory>;
    getContractFactory(
      name: "ShowtimeSplitterSeller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeSplitterSeller__factory>;
    getContractFactory(
      name: "ShowtimeSplitterSellerTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeSplitterSellerTest__factory>;
    getContractFactory(
      name: "User",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.User__factory>;
    getContractFactory(
      name: "ShowtimeERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeERC1155__factory>;
    getContractFactory(
      name: "ShowtimeV1Market",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeV1Market__factory>;
    getContractFactory(
      name: "ShowtimeV1MarketTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeV1MarketTest__factory>;
    getContractFactory(
      name: "User",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.User__factory>;
    getContractFactory(
      name: "ERC2981Royalties",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC2981Royalties__factory>;
    getContractFactory(
      name: "DSTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DSTest__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;
    getContractFactory(
      name: "ShowtimeMTReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTReceiver__factory>;
    getContractFactory(
      name: "ShowtimeSplitterSeller",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeSplitterSeller__factory>;
    getContractFactory(
      name: "ShowtimeMT",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMT__factory>;
    getContractFactory(
      name: "ShowtimeERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeERC1155__factory>;
    getContractFactory(
      name: "ShowtimeV1Market",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeV1Market__factory>;
    getContractFactory(
      name: "Hevm",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hevm__factory>;
    getContractFactory(
      name: "ShowtimeMTAccessTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTAccessTest__factory>;
    getContractFactory(
      name: "ShowtimeMTBurningTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTBurningTest__factory>;
    getContractFactory(
      name: "ShowtimeMTERC165Test",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTERC165Test__factory>;
    getContractFactory(
      name: "ShowtimeMTMintingTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTMintingTest__factory>;
    getContractFactory(
      name: "ShowtimeMTRoyaltyTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTRoyaltyTest__factory>;
    getContractFactory(
      name: "ShowtimeMTTransferTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTTransferTest__factory>;
    getContractFactory(
      name: "ShowtimeMTURITest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeMTURITest__factory>;
    getContractFactory(
      name: "User",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.User__factory>;
    getContractFactory(
      name: "ShowtimeSplitterSellerTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeSplitterSellerTest__factory>;
    getContractFactory(
      name: "User",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.User__factory>;
    getContractFactory(
      name: "ShowtimeV1MarketTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShowtimeV1MarketTest__factory>;
    getContractFactory(
      name: "User",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.User__factory>;
    getContractFactory(
      name: "TestToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestToken__factory>;
    getContractFactory(
      name: "AccessProtected",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessProtected__factory>;
    getContractFactory(
      name: "BaseRelayRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseRelayRecipient__factory>;
    getContractFactory(
      name: "DSTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DSTest__factory>;
    getContractFactory(
      name: "TestToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestToken__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "PaymentSplitter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymentSplitter>;
    getContractAt(
      name: "IERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2981>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "ERC1155Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Burnable>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC1155Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Holder>;
    getContractAt(
      name: "ERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "AccessProtected",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessProtected>;
    getContractAt(
      name: "BaseRelayRecipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseRelayRecipient>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "ERC1155Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Burnable>;
    getContractAt(
      name: "ERC1155Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Holder>;
    getContractAt(
      name: "ERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC2981Royalties",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC2981Royalties>;
    getContractAt(
      name: "Hevm",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Hevm>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC2981",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC2981>;
    getContractAt(
      name: "Migrations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migrations>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "PaymentSplitter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PaymentSplitter>;
    getContractAt(
      name: "ShowtimeMT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMT>;
    getContractAt(
      name: "ShowtimeMTAccessTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTAccessTest>;
    getContractAt(
      name: "ShowtimeMTBurningTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTBurningTest>;
    getContractAt(
      name: "ShowtimeMTERC165Test",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTERC165Test>;
    getContractAt(
      name: "ShowtimeMTMintingTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTMintingTest>;
    getContractAt(
      name: "ShowtimeMTRoyaltyTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTRoyaltyTest>;
    getContractAt(
      name: "ShowtimeMTTransferTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTTransferTest>;
    getContractAt(
      name: "ShowtimeMTURITest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTURITest>;
    getContractAt(
      name: "User",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.User>;
    getContractAt(
      name: "ShowtimeMTReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTReceiver>;
    getContractAt(
      name: "ShowtimeSplitterSeller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeSplitterSeller>;
    getContractAt(
      name: "ShowtimeSplitterSellerTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeSplitterSellerTest>;
    getContractAt(
      name: "User",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.User>;
    getContractAt(
      name: "ShowtimeERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeERC1155>;
    getContractAt(
      name: "ShowtimeV1Market",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeV1Market>;
    getContractAt(
      name: "ShowtimeV1MarketTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeV1MarketTest>;
    getContractAt(
      name: "User",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.User>;
    getContractAt(
      name: "ERC2981Royalties",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC2981Royalties>;
    getContractAt(
      name: "DSTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DSTest>;
    getContractAt(
      name: "Migrations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migrations>;
    getContractAt(
      name: "ShowtimeMTReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTReceiver>;
    getContractAt(
      name: "ShowtimeSplitterSeller",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeSplitterSeller>;
    getContractAt(
      name: "ShowtimeMT",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMT>;
    getContractAt(
      name: "ShowtimeERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeERC1155>;
    getContractAt(
      name: "ShowtimeV1Market",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeV1Market>;
    getContractAt(
      name: "Hevm",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Hevm>;
    getContractAt(
      name: "ShowtimeMTAccessTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTAccessTest>;
    getContractAt(
      name: "ShowtimeMTBurningTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTBurningTest>;
    getContractAt(
      name: "ShowtimeMTERC165Test",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTERC165Test>;
    getContractAt(
      name: "ShowtimeMTMintingTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTMintingTest>;
    getContractAt(
      name: "ShowtimeMTRoyaltyTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTRoyaltyTest>;
    getContractAt(
      name: "ShowtimeMTTransferTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTTransferTest>;
    getContractAt(
      name: "ShowtimeMTURITest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeMTURITest>;
    getContractAt(
      name: "User",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.User>;
    getContractAt(
      name: "ShowtimeSplitterSellerTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeSplitterSellerTest>;
    getContractAt(
      name: "User",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.User>;
    getContractAt(
      name: "ShowtimeV1MarketTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShowtimeV1MarketTest>;
    getContractAt(
      name: "User",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.User>;
    getContractAt(
      name: "TestToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestToken>;
    getContractAt(
      name: "AccessProtected",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessProtected>;
    getContractAt(
      name: "BaseRelayRecipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseRelayRecipient>;
    getContractAt(
      name: "DSTest",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DSTest>;
    getContractAt(
      name: "TestToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestToken>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
