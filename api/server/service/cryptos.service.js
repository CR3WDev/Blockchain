const cryptosData = require("../data/cryptos.data");
const coinGeckoSerice = require("../service/coinGecko.service");

exports.getCryptos = async () => {
  return await cryptosData.getCryptos();
};
exports.addCryptos = async ({ id, quantity }) => {
  const allCryptos = await coinGeckoSerice.getAllCryptos();

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
  const crypto = cryptosData.getCryptosById(id);
  return crypto;
};
