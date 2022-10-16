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
