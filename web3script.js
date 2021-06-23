
const BSCOptions = {
  /* Smart Chain mainnet RPC URL */
  rpcUrl: 'https://bsc-dataseed.binance.org/', 
  chainId: 56 // Smart Chain mainnet chain id
}

// Setting network to Smart Chain
const fm = new Fortmatic('pk_live_0B30C9BDE5085607', BSCOptions);
window.web3 = new Web3(fm.getProvider());

const ethEnabled = async () => {
  if (window.ethereum) {
    window.accounts = await window.ethereum.send('eth_requestAccounts');
    window.web3 = new Web3(window.ethereum);
    return true;
  }
  return false;
}
ethereumButton = document.getElementsByClassName("buynowButton");
for(let i = 0; i<ethereumButton.length; i++){
  ethereumButton[i].addEventListener('click', async () => {
    console.log("here");
    //Will Start the metamask extension
    eth = await ethEnabled();
    console.log(eth)
  });
}
