import express, { Request, Response } from "express";
const web3 = require("@solana/web3.js");
import axios from "axios";

const url: string = "https://public-api.solscan.io";
const heliusUrl = "https://api.helius.xyz/v0";
const heliusApiKey: string | undefined = process.env.HELIUS_API_KEY;

const solana = new web3.Connection(
  "https://multi-weathered-needle.solana-testnet.discover.quiknode.pro/87ef395138153de117d7e6633139a451644f9cb7/"
);

export const getAccountTransactions = async (req: Request, res: Response) => {
  try {
    const { address } = req.query;

    // const transaction = await axios.get(
    //   `${url}/account/transactions?account=${account}`,
    //   {
    //     headers: <any>{
    //       accept: "application/json",
    //       token: process.env.SOLSCAN_API_KEY,
    //     },
    //   }
    // );

    const transactions = await axios.get(
      `${heliusUrl}/addresses/${address}/transactions?api-key=${heliusApiKey}`
      // {
      //   headers: <any>{
      //     accept: "application/json",
      //     token: process.env.SOLSCAN_API_KEY,
      //   },
      // }
    );

    res.status(200).send({
      data: transactions.data,
      message: "Account Transactions",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getBalances = async (req: Request, res: Response) => {
  try {
    const { address } = req.query;

    const transactions = await axios.get(
      `${heliusUrl}/addresses/${address}/balances?api-key=${heliusApiKey}`
    );

    res.status(200).send({
      data: transactions.data,
      message: "Account Balances",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const searchAssets = async (req: Request, res: Response) => {
  try {
    const { address, page, limit } = req.query;

    const assets = await axios.post(
      `https://mainnet.helius-rpc.com/?api-key=${heliusApiKey}`,
      {
        jsonrpc: "2.0",
        id: "my-id",
        method: "searchAssets",
        params: {
          ownerAddress: address,
          compressed: true,
          page, // Starts at 1
          limit,
        },
      }
    );

    res.status(200).send({
      data: assets.data,
      message: "Assets",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getAccountTokens = async (req: Request, res: Response) => {
  try {
    const { account } = req.query;

    const tokens = await axios.get(`${url}/account/tokens?account=${account}`, {
      headers: <any>{
        accept: "application/json",
        token: process.env.SOLSCAN_API_KEY,
      },
    });

    // console.log(tokens.data);
    res.status(200).send({
      data: tokens.data,
      message: "Account Tokens",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getAccount = async (req: Request, res: Response) => {
  try {
    const { account } = req.query;

    const tokens = await axios.get(`${url}/account/${account}`, {
      headers: <any>{
        accept: "application/json",
        token: process.env.SOLSCAN_API_KEY,
      },
    });

    // console.log(tokens.data);
    res.status(200).send({
      data: tokens.data,
      message: "Account",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getSPLTransfers = async (req: Request, res: Response) => {
  try {
    const { account } = req.query;

    const tokens = await axios.get(
      `${url}/account/splTransfers?account=${account}`,
      {
        headers: <any>{
          accept: "application/json",
          token: process.env.SOLSCAN_API_KEY,
        },
      }
    );

    // console.log(tokens.data);
    res.status(200).send({
      data: tokens.data,
      message: "SPL Transfers",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getSOLTransfers = async (req: Request, res: Response) => {
  try {
    const { account } = req.query;

    const tokens = await axios.get(
      `${url}/account/solTransfers?account=${account}`,
      {
        headers: <any>{
          accept: "application/json",
          token: process.env.SOLSCAN_API_KEY,
        },
      }
    );

    // console.log(tokens.data);
    res.status(200).send({
      data: tokens.data,
      message: "SOL Transfers",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getTokenHolders = async (req: Request, res: Response) => {
  try {
    const { tokenAddress } = req.query;

    const tokens = await axios.get(
      `${url}/token/holders?tokenAddress=${tokenAddress}`,
      {
        headers: <any>{
          accept: "application/json",
          token: process.env.SOLSCAN_API_KEY,
        },
      }
    );

    // console.log(tokens.data);
    res.status(200).send({
      data: tokens.data,
      message: "Token Holders",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getTokens = async (req: Request, res: Response) => {
  try {
    const { sortBy, direction } = req.query;

    const tokens = await axios.get(
      `${url}/token/list?sortBy=${sortBy}&direction=${direction}`,
      {
        headers: <any>{
          accept: "application/json",
          token: process.env.SOLSCAN_API_KEY,
        },
      }
    );

    // console.log(tokens.data);
    res.status(200).send({
      data: tokens.data,
      message: "Tokens",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getTransaction = async (req: Request, res: Response) => {
  try {
    const { txhash } = req.query;

    // const transaction = await axios.get(`${url}/transaction/${txhash}`, {
    //   headers: <any>{
    //     accept: "application/json",
    //     token: process.env.SOLSCAN_API_KEY,
    //   },
    // });

    const transaction = await solana.getTransaction(txhash, {
      maxSupportedTransactionVersion: 0,
    });

    res.status(200).send({
      data: transaction,
      message: "Transaction Details",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getTokenMetadata = async (req: Request, res: Response) => {
  try {
    const { nftAddresses } = req.body;

    const tokens = await axios.post(
      `${heliusUrl}/token-metadata?api-key=${heliusApiKey}`,
      {
        mintAccounts: nftAddresses,
        includeOffChain: true,
        disableCache: false,
      }
    );

    // console.log(token.data);
    res.status(200).send({
      data: tokens.data,
      message: "Token Details",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getLastTransaction = async (req: Request, res: Response) => {
  try {
    const { limit } = req.query;

    const transaction = await axios.get(
      `${url}/transaction/last?limit=${limit}`,
      {
        headers: <any>{
          accept: "application/json",
          token: process.env.SOLSCAN_API_KEY,
        },
      }
    );

    // console.log(token.data);
    res.status(200).send({
      data: transaction.data,
      message: "Transaction Details",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getChainInfo = async (req: Request, res: Response) => {
  try {
    const chainInfo = await axios.get(`${url}/chaininfo`, {
      headers: <any>{
        accept: "application/json",
        token: process.env.SOLSCAN_API_KEY,
      },
    });

    // console.log(token.data);
    res.status(200).send({
      data: chainInfo.data,
      message: "Chain Info",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};
