
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

// let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))

let accounts;
let first_account;
let second_account= '0x2DE97480d29bE7cf759CBA4B5782BB2aFE9F2BD7';

web3.eth.getAccounts().then((accountList) => {
    accounts = accountList;
    first_account = accountList[0];
    console.log(first_account);
    console.log(second_account);
})

const abi = [
    {
        "inputs": [],
        "name": "decrementCounter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCount",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "incrementCounter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
const contract_address = "0x1711823D7828EaCe4119d2011068DFd8Fd1A7e2f";

let contract = new web3.eth.Contract(abi, contract_address);
console.log("CONTRATTO: ", contract)


async function increment() {
    await contract.methods.incrementCounter().send({from: first_account})
    showCounter()
}

async function decrement() {
    await contract.methods.decrementCounter().send({from: first_account})
    showCounter()
}

async function showCounter(){
    document.getElementById('counter').innerHTML= await contract.methods.getCount().call()
}