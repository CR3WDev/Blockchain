const crypto = require("../models/cryptos.model");
const { Sequelize } = require("sequelize");
const coinGeckoService = require("../service/coinGecko.service");

exports.getAmount = async () => {
  return crypto.findAll({
    attributes: [
      [
        Sequelize.fn("SUM", Sequelize.cast(Sequelize.col("quantity"), "float")),
        "totalAssetAmount",
      ],
    ],
  });
};
exports.getTopCryptos = async () => {
  return coinGeckoService.getAllCryptos();
};
