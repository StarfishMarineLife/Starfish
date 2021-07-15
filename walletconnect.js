const Web3Modal = window.Web3Modal.default;
console.log(window.WalletConnectProvider)
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
  disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
});
async function start(){
  console.log(web3Modal);
  provider = await web3Modal.connect();
}

document.getElementById("connect").addEventListener('click', start);
