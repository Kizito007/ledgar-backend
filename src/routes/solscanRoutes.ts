const express = require("express");
export const solscanRoute = express.Router();

import {
  getAccountTransactions,
  getTransaction,
} from "../controllers/solscanControls";

solscanRoute.get("/getAccountTransactions", getAccountTransactions);
solscanRoute.get("/getTransaction", getTransaction);
