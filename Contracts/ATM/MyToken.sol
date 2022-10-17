// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

//import utili

contract MyToken is ERC20, Ownable {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    function mint(uint256 amount) public onlyOwner {
        // mint di ERC20
    }
}