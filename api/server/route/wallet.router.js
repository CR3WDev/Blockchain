const express = require("express");
const routes = express.Router();
const walletService = require("../service/wallet.service");

routes.get("/wallet/totalBalance", async (req, res) => {
  const cryptos = await walletService.getCryptosTotalBalance();
  res.status(200).json(cryptos);
});
routes.get("/wallet/allCryptos", async (req, res) => {
  const cryptos = await walletService.getAllCryptos();
  res.status(200).json(cryptos);
});
module.exports = routes;
