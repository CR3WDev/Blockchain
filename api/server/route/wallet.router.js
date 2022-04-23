const express = require("express");
const routes = express.Router();
const walletService = require("../service/wallet.service");

routes.get("/wallet/amount", async (req, res) => {
  const result = await walletService.getAmount();
  res.send(result);
});
routes.get("/wallet/topCryptos", async (req, res) => {
  const result = await walletService.getTopCryptos();
  res.send(result);
});
module.exports = routes;
