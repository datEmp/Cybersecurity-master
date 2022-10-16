pragma solidity ^0.8.15;

import "./MyToken.sol";
//import utili


contract ATM {

    //strutture e parametri per monete e owner

    constructor(/*parametri*/) {
        //inizializzazione parametri
    }

    function exchangeFirstToken() public {
        //trasferimento dal msg.sender al contratto  della moneta1 e dal contratto al msg.sender della moneta2
    }

    function withdrawFirstToken(/*parametri*/)public {
        //trasferimento di una certa quantità di moneta2 da questo contratto al distributore che l'ha creato
        //questa operazione la può fare solo l'owner
    }

    function getOwner() public view returns(address){
        //OUTPUT address dell'owner
    }
}