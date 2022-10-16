let web3;

const ethEnabled = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    else{
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
    }
}
ethEnabled();

//let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))

let first_account;
let second_account= '0x2DE97480d29bE7cf759CBA4B5782BB2aFE9F2BD7';

web3.eth.getAccounts().then((accountList) => {
    first_account = accountList[0];
    console.log(first_account);
    console.log(second_account);
})

const abi = [
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "candidateNames",
                "type": "address[]"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "totalVotesFor",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "validCandidate",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "candidate",
                "type": "address"
            }
        ],
        "name": "voteForCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const contract_address= "0xAaF3b5Cc3e13bb3349AFD991f83FD4C9Eba2b854";
const contract = new web3.eth.Contract(abi, "0xAaF3b5Cc3e13bb3349AFD991f83FD4C9Eba2b854");

console.log(contract)

candidates = {"Peter": "candidate-1", "Nick": "candidate-2"}
document.getElementById("candidate-1-votes").value = 0;
document.getElementById("candidate-2-votes").value = 0;

async function voteForCandidatePeter() {
    await contract.methods.voteForCandidate(first_account).send({from: first_account})
    getNumberOfVotes()
}
async function voteForCandidateNick() {
    await contract.methods.voteForCandidate(second_account).send({from: first_account})
    getNumberOfVotes()
}

async function getNumberOfVotes() {
    const voteForPeter = await contract.methods.totalVotesFor(first_account).call({from: first_account});
    const voteForNick = await contract.methods.totalVotesFor(second_account).call({from: first_account});
    document.getElementById("candidate-1-votes").value = voteForPeter;
    document.getElementById("candidate-2-votes").value = voteForNick;
    console.log("Voti per Peter:", voteForPeter)
    console.log("Voti per Nick:", voteForNick)
}

function hideVotes(){
    document.getElementById("candidate-1-votes").value = 0;
    document.getElementById("candidate-2-votes").value = 0;
}


