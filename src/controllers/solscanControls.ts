import express, { Request, Response } from "express";
import axios from "axios";

const url: String = "https://public-api.solscan.io";

export const getAccountTransactions = async (req: Request, res: Response) => {
  try {
    const { account } = req.query;

    const transaction = await axios.get(
      `${url}/account/transactions?account=${account}`,
      {
        headers: <any>{
          accept: "application/json",
          token: process.env.SOLSCAN_API_KEY,
        },
      }
    );

    // console.log(transaction.data);
    res.status(200).send({
      data: transaction.data,
      message: "Account Transactions",
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

    const transaction = await axios.get(`${url}/transaction/${txhash}`, {
      headers: <any>{
        accept: "application/json",
        token: process.env.SOLSCAN_API_KEY,
      },
    });

    // console.log(transaction.data);
    res.status(200).send({
      data: transaction.data,
      message: "Transaction Details",
      status: 0,
    });
  } catch (err: any) {
    res.status(500).send({ data: {}, message: err.message });
  }
};

export const getToken = async (req: Request, res: Response) => {
  try {
    const { tokenAddress } = req.query;

    const token = await axios.get(
      `${url}/token/meta?tokenAddress=${tokenAddress}`,
      {
        headers: <any>{
          accept: "application/json",
          token: process.env.SOLSCAN_API_KEY,
        },
      }
    );

    // console.log(token.data);
    res.status(200).send({
      data: token.data,
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
