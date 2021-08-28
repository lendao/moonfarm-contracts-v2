// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract MoonFarmToken is Ownable, ERC20("MoonFarm Token", "MOON") {
    using SafeERC20 for IERC20;

    uint256 public tokenPrice = 10;
    uint256 public movrRaised;
    uint256 public saleCap = 5000 ether;
    uint256 public minBuyAmount = 0.5 ether;

    constructor() {}

    receive() external payable {
        buyToken();
    }

    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
    }

    function buyToken() public payable {
        require(
            msg.value >= minBuyAmount,
            "must send more than minimum amount"
        );
        require(msg.value + movrRaised <= saleCap, "cap reached");
        uint256 tokenAmount = msg.value * tokenPrice;
        movrRaised = movrRaised + msg.value;
        _mint(msg.sender,tokenAmount);
    }

    function changeSalePrice(uint256 _amount) public onlyOwner {
        tokenPrice = _amount;
    }

    function changeSaleCap(uint256 _amount) public onlyOwner {
        saleCap = _amount;
    }

    function withdrawMovr() external onlyOwner {
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }
}
