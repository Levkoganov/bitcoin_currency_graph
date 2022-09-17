// Dependencies
import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";

// services and config
import db_connection from "./config/mongodb_connection.js";
import storeData from "./services/storeData.js";

// Routers
import bitcoinRouter from "./routes/bitcoin.js";

// Functions
dotenv.config();
db_connection(process.env.MONGODB_URI);
storeData();

const app = express(); // Express var

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Endpoints
app.use("/bitcoin", bitcoinRouter);

export default app;
