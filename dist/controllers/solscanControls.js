"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainInfo = exports.getLastTransaction = exports.getToken = exports.getTransaction = exports.getTokens = exports.getTokenHolders = exports.getSOLTransfers = exports.getSPLTransfers = exports.getAccount = exports.getAccountTokens = exports.getAccountTransactions = void 0;
const axios_1 = __importDefault(require("axios"));
const url = "https://public-api.solscan.io";
const getAccountTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { account } = req.query;
        const transaction = yield axios_1.default.get(`${url}/account/transactions?account=${account}`, {
            headers: {
                accept: "application/json",
                token: process.env.SOLSCAN_API_KEY,
            },
        });
        // console.log(transaction.data);
        res.status(200).send({
            data: transaction.data,
            message: "Account Transactions",
            status: 0,
        });
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getAccountTransactions = getAccountTransactions;
const getAccountTokens = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { account } = req.query;
        const tokens = yield axios_1.default.get(`${url}/account/tokens?account=${account}`, {
            headers: {
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
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getAccountTokens = getAccountTokens;
const getAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { account } = req.query;
        const tokens = yield axios_1.default.get(`${url}/account/${account}`, {
            headers: {
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
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getAccount = getAccount;
const getSPLTransfers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { account } = req.query;
        const tokens = yield axios_1.default.get(`${url}/account/splTransfers?account=${account}`, {
            headers: {
                accept: "application/json",
                token: process.env.SOLSCAN_API_KEY,
            },
        });
        // console.log(tokens.data);
        res.status(200).send({
            data: tokens.data,
            message: "SPL Transfers",
            status: 0,
        });
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getSPLTransfers = getSPLTransfers;
const getSOLTransfers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { account } = req.query;
        const tokens = yield axios_1.default.get(`${url}/account/solTransfers?account=${account}`, {
            headers: {
                accept: "application/json",
                token: process.env.SOLSCAN_API_KEY,
            },
        });
        // console.log(tokens.data);
        res.status(200).send({
            data: tokens.data,
            message: "SOL Transfers",
            status: 0,
        });
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getSOLTransfers = getSOLTransfers;
const getTokenHolders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tokenAddress } = req.query;
        const tokens = yield axios_1.default.get(`${url}/token/holders?tokenAddress=${tokenAddress}`, {
            headers: {
                accept: "application/json",
                token: process.env.SOLSCAN_API_KEY,
            },
        });
        // console.log(tokens.data);
        res.status(200).send({
            data: tokens.data,
            message: "Token Holders",
            status: 0,
        });
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getTokenHolders = getTokenHolders;
const getTokens = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sortBy, direction } = req.query;
        const tokens = yield axios_1.default.get(`${url}/token/list?sortBy=${sortBy}&direction=${direction}`, {
            headers: {
                accept: "application/json",
                token: process.env.SOLSCAN_API_KEY,
            },
        });
        // console.log(tokens.data);
        res.status(200).send({
            data: tokens.data,
            message: "Tokens",
            status: 0,
        });
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getTokens = getTokens;
const getTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { txhash } = req.query;
        const transaction = yield axios_1.default.get(`${url}/transaction/${txhash}`, {
            headers: {
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
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getTransaction = getTransaction;
const getToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tokenAddress } = req.query;
        const token = yield axios_1.default.get(`${url}/token/meta?tokenAddress=${tokenAddress}`, {
            headers: {
                accept: "application/json",
                token: process.env.SOLSCAN_API_KEY,
            },
        });
        // console.log(token.data);
        res.status(200).send({
            data: token.data,
            message: "Token Details",
            status: 0,
        });
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getToken = getToken;
const getLastTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit } = req.query;
        const transaction = yield axios_1.default.get(`${url}/transaction/last?limit=${limit}`, {
            headers: {
                accept: "application/json",
                token: process.env.SOLSCAN_API_KEY,
            },
        });
        // console.log(token.data);
        res.status(200).send({
            data: transaction.data,
            message: "Transaction Details",
            status: 0,
        });
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getLastTransaction = getLastTransaction;
const getChainInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const chainInfo = yield axios_1.default.get(`${url}/chaininfo`, {
            headers: {
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
    }
    catch (err) {
        res.status(500).send({ data: {}, message: err.message });
    }
});
exports.getChainInfo = getChainInfo;
