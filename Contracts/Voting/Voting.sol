pragma solidity ^0.8.4;

contract Voting {

  /* Strutture per mantenere i candidati e i voti da loro ricevuti */

  constructor() public {
    // INPUT: i candidati
    // Inizializza la struttura dei candidati
  }
 
  function totalVotesFor(/* PARAMETRI */) view public returns (uint256) {
    // INPUT: un candidato
    // OUTPUT: il numero di voti per un candidato
    // Errore se il candidato non è in lista
  }

  // Aumenta il voto di un candidato
  function voteForCandidate(/* PARAMETRI */) public {
    // INPUT: un candidato
    // Errore se il candidato non è in lista
  }

  // Controlla se un candidato è in lista
  function validCandidate(/* PARAMETRI */) view public returns (bool) {
  }
}