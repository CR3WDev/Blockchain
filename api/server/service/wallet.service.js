const walletData = require("../data/wallet.data");
exports.getAmount = async () => {
  const amount = await walletData.getAmount();
  return amount;
};
exports.getTopCryptos = async () => {
  const cryptos = await walletData.getTopCryptos();
  let topCryptos = cryptos.slice(0, 5);
  return topCryptos;
};
