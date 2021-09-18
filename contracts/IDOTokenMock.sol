// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

contract IDOTokenMock is ERC20PresetFixedSupply {
    uint256 private constant SUPPLY = 2500000 ether;

    constructor()
        ERC20PresetFixedSupply(
            "IDO Mock",
            "MOCK",
            SUPPLY,
            msg.sender
        )
    {}
}
