import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 6000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

import { solscanRoute } from "./routes/solscanRoutes";

app.use("/apiv1/solscan", solscanRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Ledgar is Live!");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
