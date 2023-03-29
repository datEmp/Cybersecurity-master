pragma solidity ^0.8.15;

import "./MyToken.sol";


contract ATM {
    address firstToken;
    address secondToken;

    address owner;

    constructor(address _firstToken, address _secondToken) {
        firstToken = _firstToken;
        secondToken = _secondToken;

        owner = msg.sender;
    }

    function exchangeFirstToken() public {
        MyToken(firstToken).transferFrom(msg.sender, address(this), 1);
        MyToken(secondToken).transfer(msg.sender, 1);
    }

    function withdrawFirstToken(uint256 amount)public {
        require(msg.sender== owner, "only owner can withdraw");
        MyToken(firstToken).transfer(msg.sender, amount);
    }

    function getOwner() public view returns(address){
        return owner;
    }
}