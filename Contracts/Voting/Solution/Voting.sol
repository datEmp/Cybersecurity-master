pragma solidity ^0.8.4;
contract Voting {

  mapping (address => uint256) private votesReceived;
  mapping (address=> bool) private candidateInList;

  constructor(address[] memory candidateNames) public {
    for(uint i = 0; i < candidateNames.length; i++) {
      candidateInList[candidateNames[i]]=true;
    }
  }
 
  function totalVotesFor(address candidate) view public returns (uint256) {
    require(validCandidate(candidate), "candidato non in lista");
    return votesReceived[candidate];
  }

  function voteForCandidate(address candidate) public {
    require(validCandidate(candidate), "candidato non in lista");
    votesReceived[candidate] += 1;
  }

  function validCandidate(address candidate) view public returns (bool) {
    return candidateInList[candidate];
  }
}