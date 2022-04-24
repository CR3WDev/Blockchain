const cryptosData = require("../data/cryptos.data");
const walletService = require("../service/wallet.service");

exports.getCryptos = async () => {
  return await cryptosData.getCryptos();
};
exports.addCryptos = async ({ id, quantity }) => {
  const allCryptos = await walletService.getAllCryptos();

  allCryptos.map((cryptos) => {
    if (cryptos.id === id) {
      newCrypto = {
        id,
        symbol: cryptos.symbol,
        marketCapRank: cryptos.market_cap_rank,
        name: cryptos.name,
        currentPrice: cryptos.current_price,
        image: cryptos.image,
        quantity,
      };
    }
  });
  return cryptosData.addCryptos(newCrypto);
};
exports.updateCryptos = async (id, quantity) => {
  return cryptosData.updateCryptos(id, quantity);
};
exports.deleteCryptos = async (id) => {
  return cryptosData.deleteCryptos(id);
};
exports.getCryptosById = async (id) => {
  return cryptosData.getCryptosById(id);
};
