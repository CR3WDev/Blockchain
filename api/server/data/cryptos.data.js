const crypto = require("../models/cryptos.model");

exports.getCryptos = async () => {
  return crypto.findAll();
};
exports.addCryptos = async (newCrypto) => {
  return crypto.create(newCrypto);
};
exports.updateCryptos = async (id, quantity) => {
  return crypto.update({ quantity }, { where: { id } });
};
exports.deleteCryptos = async (id) => {
  return crypto.destroy({ where: { id } });
};
exports.getCryptosById = async (id) => {
  return crypto.findOne({ where: { id } });
};
