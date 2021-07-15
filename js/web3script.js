const BSCOptions = {
  /* Smart Chain mainnet RPC URL */
  rpcUrl: 'https://bsc-dataseed.binance.org/', 
  chainId: 56 // Smart Chain mainnet chain id
}

// Setting network to Smart Chain
const fm = new Fortmatic('pk_live_930C2BA297402E88', BSCOptions);
window.web3 = new Web3(fm.getProvider());

const address = "0x652Ebb7B1A44Db09258a2C386b3E46E6D9c2B2f1"; 
var state = {};


async function onConnect(){
  contract = await loadContract();

  

}

async function onPageLoad(){


  priceData = await fetch("https://api.binance.com/api/v1/ticker/price?symbol=BNBUSDT");
  bnb_data = await priceData.text();
  bnb_data = JSON.parse(bnb_data);
  state.bnbUSD = Number(bnb_data.price);
  console.log(state.bnbUSD);
  document.getElementById("bnbPrice").innerHTML = "1 BNB = $"+state.bnbUSD;


}
onPageLoad();


async function loadContract(){
  let contract =  await new window.web3.eth.Contract(abi, address);
  return contract
}

async function loadWeb3() {
  if (window.ethereum) {
    await window.ethereum.request({method:'eth_requestAccounts'});

    return true;
  }
  return false;
}

const ethEnabled = async () => {
  if (window.ethereum) {
    window.accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
    console.log(window.accounts);
    window.web3 = new Web3(window.ethereum);
    return true;
  }
  console.log("fail");
  return false;
}


const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        rpc: {
          56: "https://bsc-dataseed.binance.org/"
        },
      }
    },
  };
  
  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: true, // optional. For MetaMask / Brave / Opera.
  });
async function walletConnect(){
  
  console.log(window.WalletConnectProvider)
  provider = await web3Modal.connect();
  window.web3 = new Web3(provider);
  connect();
}
document.getElementById("walletConnect").addEventListener('click', walletConnect);

async function connectMetamask(){
  window.web3 = new Web3(window.ethereum);
  connect();
}


async function connect(){
  console.log("connect called");
  state.hasEth = await ethEnabled();
  window.contract = await loadContract()
  presaleStarted = await contract.methods.presale().call()
  if(!presaleStarted){
    //document.getElementById("presaleWarning").style.display = "block";
    //return;
  }
  console.log(window.contract.methods);
  state.tokenPrice = Number(await window.contract.methods.presalePrice().call());
  state.userBalance = await window.web3.eth.getBalance(window.accounts[0]);
  if(state.hasEth){
    document.getElementById("balance").innerHTML = (state.userBalance / (10**18)).toFixed(4)+" BNB";
    document.getElementById("connect").innerHTML = "Connected";
    document.getElementById("connect").style.backgroundColor = "";
    document.getElementById("address").innerHTML = window.accounts[0];
    var myCollapse = document.getElementById('buyCalc')
    var bsCollapse = new bootstrap.Collapse(myCollapse, {
      toggle: false
    })    
    bsCollapse.show();
  }
}
connectBtn = document.getElementById("connect");
connectBtn.addEventListener('click', connectMetamask);

coins = document.getElementById("coins");
price = document.getElementById("price");

async function updateCharge(){
  console.log(state.tokenPrice);
  state.totalPrice = Number(coins.value) * Number(state.tokenPrice);
  price.innerHTML = state.totalPrice;
}
coins.addEventListener("change", updateCharge);

buyBtn = document.getElementById('buy');
async function buy(){
  console.log("here");
  state.totalPrice = (Number(coins.value)*0.00004)*(10**18);
  if(state.userBalance < state.totalPrice){
    $('#exampleModal').modal('show')
    return;
  }
  output = await window.contract.methods.buy().send({
    from: window.accounts[0],
    value: state.totalPrice
  }
  )
  console.log(output);
}
buyBtn.addEventListener('click', buy);

