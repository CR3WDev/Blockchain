const express = require("express");
const cryptosRoutes = require("./route/cryptos.router");
const walletRoutes = require("./route/wallet.router");
const app = express();
const cors = require("cors");

require("./infra");

app.use(express.json());
app.use(cors());
app.use(walletRoutes);
app.use(cryptosRoutes);

app.listen(3333);
