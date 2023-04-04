let web3;
const ethEnabled = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
    }
}
ethEnabled();

let accounts;
let first_account;
const second_account = '0x2DE97480d29bE7cf759CBA4B5782BB2aFE9F2BD7';

web3.eth.getAccounts().then((accountList) => {
    accounts = accountList;
    first_account = accountList[0];
    console.log(first_account);
    console.log(second_account);
    document.getElementById('user_address').innerHTML = "User: " + first_account

    if (first_account === second_account) {
        document.getElementById('user_role').innerHTML = "COMMON USER";
        document.getElementById('fillATM-button').style.display = 'none';
        document.getElementById('fillDistr-button').style.display = 'none';
        document.getElementById('createATM-button').style.display = 'none';
        document.getElementById('user_role').style.color = 'green';
        document.getElementById('distributeFirstToken-button').style.display = 'none';
        document.getElementById('toWithdraw').style.display = 'none';
        document.getElementById('withdraw-button').style.display = 'none';
    } else {
        document.getElementById('user_role').innerHTML = "OWNER";
        document.getElementById('user_role').style.color = 'red';
        document.getElementById('requestforFirstToken-button').style.display = 'none';
        document.getElementById('exchangeToken-button').style.display = 'none';
    }
})
//0xB6c168FC8B4F48f5198662111d40ad47172D6dea  0xBc4edbF706C5aE542f940bcFf49d184DA533622E

const contract_address_Distributor = "0xB6c168FC8B4F48f5198662111d40ad47172D6dea";
const distributor_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "addFundsToATM",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "createATM",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "distribute",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "fillDistributor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFirstToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "firstTokenName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "firstTokenSymbol",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "secondTokenName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "secondTokenSymbol",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawFirstTokenFromATM",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "firstBalance",
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
        "inputs": [],
        "name": "firstName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "firstTokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMyATM",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "requestIsDone",
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
                "name": "user",
                "type": "address"
            }
        ],
        "name": "secondBalance",
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
        "inputs": [],
        "name": "secondName",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "secondtokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "wantFirstPrint",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
const ATM_ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_firstToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_secondToken",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [],
        "name": "exchangeFirstToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOwner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "withdrawFirstToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
const myToken_ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
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
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
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
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
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
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const zero_address = '0x0000000000000000000000000000000000000000'

const distributor_contract = new web3.eth.Contract(distributor_ABI, contract_address_Distributor);
console.log("CONTRATTO DISTRIBUTORE: ", distributor_contract)


async function getBalances() {
    try {
        document.getElementById('token1-name').innerHTML = await distributor_contract.methods.firstName().call();
        document.getElementById('token2-name').innerHTML = await distributor_contract.methods.secondName().call();
        document.getElementById('owner-balance1').innerHTML = await distributor_contract.methods.firstBalance(first_account).call();
        document.getElementById('owner-balance2').innerHTML = await distributor_contract.methods.secondBalance(first_account).call();
        document.getElementById('distributor-balance1').innerHTML = await distributor_contract.methods.firstBalance(contract_address_Distributor).call();
        document.getElementById('distributor-balance2').innerHTML = await distributor_contract.methods.secondBalance(contract_address_Distributor).call();

        const myATM = await distributor_contract.methods.getMyATM().call();
        if (myATM !== zero_address) {
            document.getElementById('atm-balance1').innerHTML = await distributor_contract.methods.firstBalance(myATM).call();
            document.getElementById('atm-balance2').innerHTML = await distributor_contract.methods.secondBalance(myATM).call();
        } else {
            document.getElementById('atm-balance1').innerHTML = 'STAND inesistente';
            document.getElementById('atm-balance2').innerHTML = 'STAND inesistente';
        }
    } catch {
        console.log('some error occurred while getBalances()')
    }
}

function hideBalances() {
    document.getElementById('owner-balance1').innerHTML = '';
    document.getElementById('owner-balance2').innerHTML = '';
    document.getElementById('distributor-balance1').innerHTML = '';
    document.getElementById('distributor-balance2').innerHTML = '';
    document.getElementById('atm-balance1').innerHTML = '';
    document.getElementById('atm-balance2').innerHTML = '';
}


async function createATM() {
    try{
        let contract_address_ATM = await distributor_contract.methods.getMyATM().call();
        if (contract_address_ATM === zero_address) {

            document.getElementById('atm_info').innerHTML = "ATM in creazione...";
            await distributor_contract.methods.createATM(1000).send({from: first_account});
            contract_address_ATM = await distributor_contract.methods.getMyATM().call();
            document.getElementById('atm_info').innerHTML = "ATM creato e raggiungibile al " + contract_address_ATM;

        } else {
            document.getElementById('atm_info').innerHTML = "ATM creato e raggiungibile al " + contract_address_ATM;
        }
        getBalances()
    }
    catch {
        console.log("error in createATM()")
    }
}

async function distributeFirstToken() {
    try {
        await distributor_contract.methods.distribute().send({from: first_account});
        getBalances();
    } catch {
        console.log('error in distributeFirstToken')
    }

}

async function addFundsToATM() {
    try {
        let contract_address_ATM = await distributor_contract.methods.getMyATM().call();
        if (contract_address_ATM === zero_address) {
            document.getElementById('atm_info').innerHTML = "ATM non ancora creato";
        } else {
            await distributor_contract.methods.addFundsToATM(10).send({from: first_account});
        }
        getBalances();
    } catch {
        console.log('some error in addFundsToATM()')
    }
}

async function fillDistributor() {
    try {
        await distributor_contract.methods.fillDistributor(5000).send({from: first_account});
        getBalances();
    } catch {
        console.log('some error in fillDistributor')
    }
}

async function withdraw() {
    try {
        let contract_address_ATM = await distributor_contract.methods.getMyATM().call();

        if (contract_address_ATM === zero_address) {
            document.getElementById('atm_info').innerHTML = "ATM non ancora creato";
        } else {
            let toWithdraw = document.getElementById('toWithdraw').value
            if (toWithdraw !== '' && toWithdraw > 0) {
                await distributor_contract.methods.withdrawFirstTokenFromATM(toWithdraw).send({from: first_account});
            }
        }
        getBalances();
    } catch {
        console.log('some error occurred while withdraw()')
    }
}



