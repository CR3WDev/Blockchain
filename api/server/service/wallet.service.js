const cryptosData = require("../data/cryptos.data");
const walletData = require("../data/wallet.data");
exports.getAllCryptos = async () => {
  const result = await walletData.getAllCryptos();
  return result;
};
exports.getCryptosTotalBalance = async () => {
  const cryptos = await cryptosData.getCryptos();
  let result = 0;

  cryptos.map((data) => {
    result += data.quantity * data.currentPrice;
  });
  return result;
};
