import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./database/mysql.connect.js";

dotenv.config();

const PORT = process.env.PORT || 8001;

const server = express();

server.use(express.json());
server.use(cors());
server.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

server.use("/$", (req, res) => {
  res.send("Email Encryptor App - Backend");
});

server.listen(PORT, () => {
  console.log("Está vivo!");
});
