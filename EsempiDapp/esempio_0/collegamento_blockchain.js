let web3;
const ethEnabled = async () => {
    if (window.ethereum) {
        console.log('window.ethereum is enabled')
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    else{
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
    }
    document.getElementById("web3status").innerHTML = 'OK, web3 is enabled check the console'
    console.log(web3);
}
ethEnabled();

// let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))

let accounts;
let first_account;
let second_account= '0x2DE97480d29bE7cf759CBA4B5782BB2aFE9F2BD7';

getWeb3Info = async () => {

    // get Node Info
    const node= await web3.eth.getNodeInfo();
    console.log(node);
    document.getElementById("nodeInfo").innerHTML = node;

    accounts = await web3.eth.getAccounts();
    first_account = accounts[0];
    console.log(accounts);
    console.log(first_account);
    document.getElementById("userConnected").innerHTML = first_account;
    document.getElementById('accounts').innerHTML = accounts;
    document.getElementById('secondAccount').innerHTML = second_account;


    const balance = await web3.eth.getBalance(first_account);
    console.log(balance);
    document.getElementById("userBalanceGWEI").innerHTML = balance;
    document.getElementById("userBalanceETH").innerHTML = web3.utils.fromWei(balance, 'ether');

    const second_account_balance = await web3.eth.getBalance(second_account);
    console.log(second_account_balance);
    document.getElementById("secondAccountBalance").innerHTML = web3.utils.fromWei(second_account_balance, 'ether');

    const gasPrice = await web3.eth.getGasPrice();
    console.log(gasPrice);
    document.getElementById("gasPrice").innerHTML = web3.utils.fromWei(gasPrice, 'ether');

    const blockNumber = await web3.eth.getBlockNumber();
    console.log(blockNumber);
    document.getElementById("blockNumber").innerHTML = blockNumber;

    const block = await web3.eth.getBlock('latest');
    document.getElementById("block").innerHTML = JSON.stringify(block);

    const transactionCount = await web3.eth.getTransactionCount(first_account);
    console.log(transactionCount);
    document.getElementById("transactionCount").innerHTML = transactionCount;

    const chainId = await web3.eth.getChainId();
    console.log(chainId);
    document.getElementById("chainId").innerHTML = chainId;
}

getWeb3Info()



