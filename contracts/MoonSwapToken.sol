// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract MoonSwapToken is ERC20PresetFixedSupply {
    uint256 private constant SUPPLY = 100000000 ether;

    constructor()
        ERC20PresetFixedSupply(
            "MoonSwap Token",
            "mSWAP",
            SUPPLY,
            msg.sender
        )
    {}
}
