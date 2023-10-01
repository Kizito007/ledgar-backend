const express = require("express");
export const solscanRoute = express.Router();

import {
  getAccountTransactions,
  getTransaction,
  getToken,
} from "../controllers/solscanControls";

solscanRoute.get("/getAccountTransactions", getAccountTransactions);
solscanRoute.get("/getTransaction", getTransaction);
solscanRoute.get("/getToken", getToken);
