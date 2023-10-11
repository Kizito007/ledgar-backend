const express = require("express");
export const solscanRoute = express.Router();

import {
  getAccountTransactions,
  getTransaction,
  getTokens,
  getTokenMetadata,
  getBalances,
  searchAssets,
  getAccount,
  getAccountTokens,
  getSOLTransfers,
  getSPLTransfers,
  getTokenHolders,
  getChainInfo,
  getLastTransaction,
} from "../controllers/solscanControls";

solscanRoute.get("/getAccountTransactions", getAccountTransactions);
solscanRoute.get("/getBalances", getBalances);
solscanRoute.post("/searchAssets", searchAssets);
solscanRoute.get("/getTransaction", getTransaction);
solscanRoute.get("/getTokens", getTokens);
solscanRoute.post("/getToken", getTokenMetadata);
solscanRoute.get("/getAccount", getAccount);
solscanRoute.get("/getAccountTokens", getAccountTokens);
solscanRoute.get("/getSOLTransfers", getSOLTransfers);
solscanRoute.get("/getSPLTransfers", getSPLTransfers);
solscanRoute.get("/getTokenHolders", getTokenHolders);
solscanRoute.get("/getChainInfo", getChainInfo);
solscanRoute.get("/getLastTransaction", getLastTransaction);
