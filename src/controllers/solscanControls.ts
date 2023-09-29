import express, { Request, Response } from "express";
import axios from "axios";

const url: String = "https://public-api.solscan.io";

export const getAccountTransactions = async (req: Request, res: Response) => {
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
};

export const getTransaction = async (req: Request, res: Response) => {
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
};
