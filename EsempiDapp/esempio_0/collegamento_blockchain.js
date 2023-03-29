let web3;
const ethEnabled = async () => {
    if (window.ethereum) {
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

web3.eth.getAccounts().then((accountList) => {
    accounts = accountList;
    first_account = accountList[0];
    console.log(first_account);
    document.getElementById("userConnected").innerHTML = first_account;
    console.log(second_account);
    console.log(web3.eth)
    web3.eth.getBalance(first_account).then((balance) => {
        console.log(balance);
        document.getElementById("userBalanceGWEI").innerHTML = balance;
        document.getElementById("userBalanceETH").innerHTML = web3.utils.fromWei(balance, 'ether');
    })

    web3.eth.getGasPrice().then((gasPrice) => {
        console.log(gasPrice);
        document.getElementById("gasPrice").innerHTML = web3.utils.fromWei(gasPrice, 'ether');
    })

    web3.eth.getBlockNumber().then((blockNumber) => {
        console.log(blockNumber);
        document.getElementById("blockNumber").innerHTML = blockNumber;
    })

    web3.eth.getBlock('latest').then((block) => {
        console.log(block);
        document.getElementById("block").innerHTML = JSON.stringify(block);
    })

    web3.eth.getTransactionCount(first_account).then((transactionCount) => {
        console.log(transactionCount);
        document.getElementById("transactionCount").innerHTML = transactionCount;
    })

    web3.eth.getCoinbase().then((coinbase) => {
        console.log(coinbase);
        document.getElementById("coinbase").innerHTML = coinbase;
    })

    web3.eth.getChainId().then((chainId) => {
        console.log(chainId);
        document.getElementById("chainId").innerHTML = chainId;
    })




})




