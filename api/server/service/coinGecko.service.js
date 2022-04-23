const axios = require("axios");

exports.getAllCryptos = async () => {
  const response = await axios({
    url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false",
    method: "get",
  });
  return response.data;
};
