const express = require("express");
export const solscanRoute = express.Router();

import {
  getAccountTransactions,
  getTransaction,
  getTokens,
  getToken,
  getAccount,
  getAccountTokens,
  getSOLTransfers,
  getSPLTransfers,
  getTokenHolders,
  getChainInfo,
  getLastTransaction,
} from "../controllers/solscanControls";

solscanRoute.get("/getAccountTransactions", getAccountTransactions);
solscanRoute.get("/getTransaction", getTransaction);
solscanRoute.get("/getTokens", getTokens);
solscanRoute.get("/getToken", getToken);
solscanRoute.get("/getAccount", getAccount);
solscanRoute.get("/getAccountTokens", getAccountTokens);
solscanRoute.get("/getSOLTransfers", getSOLTransfers);
solscanRoute.get("/getSPLTransfers", getSPLTransfers);
solscanRoute.get("/getTokenHolders", getTokenHolders);
solscanRoute.get("/getChainInfo", getChainInfo);
solscanRoute.get("/getLastTransaction", getLastTransaction);
