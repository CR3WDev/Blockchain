const express = require("express");
const routes = express.Router();
const cryptosService = require("../service/cryptos.service");

routes.get("/cryptos", async (req, res) => {
  const cryptos = await cryptosService.getCryptos();
  res.status(200).json(cryptos);
});
routes.get("/cryptos/:id", async (req, res) => {
  const { id } = req.params;
  const crypto = await cryptosService.getCryptosById(id);
  res.status(200).json(crypto);
});
routes.post("/cryptos", async (req, res) => {
  const { id, quantity } = req.body;
  const newCrypto = await cryptosService.addCryptos({ id, quantity });
  res.status(201).json(newCrypto);
});
routes.put("/cryptos/:id", async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const crypto = await cryptosService.updateCryptos(id, quantity);
  res.status(200).json({ crypto });
});
routes.delete("/cryptos/:id", async (req, res) => {
  const { id } = req.params;
  const crypto = await cryptosService.deleteCryptos(id);
  res.status(200).json({ message: `cryptos deleted = ${crypto}` });
});

module.exports = routes;
