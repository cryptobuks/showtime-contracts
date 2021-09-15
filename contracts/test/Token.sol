//SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20("Test Token", "TKN") {
    function mint(uint256 _amount) external {
        _mint(msg.sender, _amount);
    }
}
