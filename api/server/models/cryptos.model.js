const { DataTypes } = require("sequelize");
const sequelize = require("../infra");

const Crypto = sequelize.define("crypto", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  image: { type: DataTypes.STRING, allowNull: false },
  symbol: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  currentPrice: { type: DataTypes.STRING, allowNull: false },
  marketCapRank: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Crypto;
