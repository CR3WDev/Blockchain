const express = require("express");
const routesWallet = require("./route/cryptos.router");
const routesCryptos = require("./route/wallet.router");
const app = express();
const cors = require("cors");

require("./infra");

app.use(express.json());
app.use(cors());
app.use(routesCryptos);
app.use(routesWallet);

app.listen(3333);
