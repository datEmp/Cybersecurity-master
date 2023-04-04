pragma solidity ^0.8.15;

//import utili
contract Distributor {

    // strutture e parametri di supporto

    constructor(
        /*parametri */) {

        //assegnazione dei parametri e mint
    }

    function distribute() public {
        // distribuire i token1 a chi ne fa richiesta
    }

    function getFirstToken() public {
        // fare richiesta del token1
    }

    function fillDistributor(/*parametri */) public {
        // ricaricare il distributore
    }

    function createATM(/*parametri */) public {
        // creare un ATM e passargli una certa quantità di token2
    }

    function addFundsToATM(/*parametri */) public{
        // aggiungere fondi all'ATM
    }

    function withdrawFirstTokenFromATM(/*parametri */)public {
        // prelevare i token guadagnati dall'atm
    }

    function firstName() public view returns(string memory) {
        // OUTPUT nome della moneta1
    }

    function secondName() public view returns(string memory) {
        // OUTPUT  nome della moneta2
    }

    function firstBalance(/*parametri */) public view returns(uint256) {
        // OUTPUT balance moneta 1 di un certo utente
    }

    function secondBalance(/*parametri */) public view returns(uint256) {
        // OUTPUT balance moneta2 di un certo utente
    }

    function getMyATM() public view returns(address) {
        // OUTPUT address dell'atm creato
    }

    function firstTokenAddress() public view returns(address) {
        // OUTPUT address della moneta1
    }

    function secondtokenAddress() public view returns(address) {
        // OUTPUT address della moneta2
    }

    function wantFirstPrint() public view returns(address[] memory) {
        // OUTPUT lista degli utenti che hanno richiesto la moneta1
    }

    function requestIsDone(/*parametri */) public view returns(bool) {
        // OUTPUT sapere se un utente ha effettuato o meno una richiesta della moneta1
    }
}