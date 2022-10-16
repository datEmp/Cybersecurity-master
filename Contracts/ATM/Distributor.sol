pragma solidity ^0.8.15;

import "./MyToken.sol";
import "./ATM.sol";

contract Distributor {
    address private owner;

    address private firstToken;
    address private secondToken;
    address private myATM;

    address[] private wantFirst;

    mapping(address=>bool) private requestDone;

    constructor(
        string memory firstTokenName,
        string memory firstTokenSymbol,
        string memory secondTokenName,
        string memory secondTokenSymbol) {

        owner = msg.sender;
        address first = address(new MyToken(firstTokenName, firstTokenSymbol));
        address second = address(new MyToken(secondTokenName, secondTokenSymbol));

        MyToken(first).mint(5000);

        firstToken = first;
        secondToken = second;
    }

    function distribute() public {
        require(msg.sender == owner, "Only owner");
        require(firstToken != address(0), "Must have first token");

        for(uint256 i = 0; i < wantFirst.length; i++) {
            if(wantFirst[i]!=address(0)){
                MyToken(firstToken).transfer(wantFirst[i], 1);
                wantFirst[i]=address(0);
                requestDone[wantFirst[i]]=false;
            }
        }
    }

    function getFirstToken() public {
        require(requestDone[msg.sender]==false,"requeste already done");
        wantFirst.push(msg.sender);
        requestDone[msg.sender]=true;
    }

    function fillDistributor(uint256 amount) public {
        require(msg.sender== owner, "only owner can fill the distributor");
        MyToken(firstToken).mint(amount);
    }

    function createATM(uint256 amount) public {
        require(msg.sender== owner, "only owner can create an ATM");
        require(myATM ==address(0), "atm already created");
        ATM atm= new ATM(firstToken, secondToken);
        myATM = address(atm);
        MyToken(secondToken).mint(amount);
        MyToken(secondToken).transfer(address(atm), amount);
    }

    function addFundsToATM(uint256 amount) public{
        require(msg.sender== owner, "only owner can create an ATM");
        require(myATM !=address(0), "atm must be created");
        MyToken(secondToken).mint(amount);
        MyToken(secondToken).transfer(myATM, amount);
    }

    function withdrawFirstTokenFromATM(uint256 amount)public {
        require(msg.sender== owner, "only owner can withdraw");
        require(myATM !=address(0), "atm must be created");
        ATM(myATM).withdrawFirstToken(amount);
    }

    function firstName() public view returns(string memory) {
        return MyToken(firstToken).name();
    }

    function secondName() public view returns(string memory) {
        return MyToken(secondToken).name();
    }

    function firstBalance(address user) public view returns(uint256) {
        return MyToken(firstToken).balanceOf(user);
    }

    function secondBalance(address user) public view returns(uint256) {
        return MyToken(secondToken).balanceOf(user);
    }

    function getMyATM() public view returns(address) {
        return myATM;
    }

    function firstTokenAddress() public view returns(address) {
        return firstToken;
    }

    function secondtokenAddress() public view returns(address) {
        return secondToken;
    }

    function wantFirstPrint() public view returns(address[] memory) {
        return wantFirst;
    }

    function requestIsDone(address user) public view returns(bool) {
        return requestDone[user];
    }
}