"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//For env File
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 6000;
const solscanRoutes_1 = require("./routes/solscanRoutes");
app.use("/apiv1/solscan", solscanRoutes_1.solscanRoute);
app.get("/", (req, res) => {
    res.send("Ledgar is Live!");
});
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
