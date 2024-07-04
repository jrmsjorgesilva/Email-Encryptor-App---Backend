import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { mongoDB } from "./database/mongo.connect.js";
// routers
import { userRouter } from "./routes/user.route.js";
import { productsRouter } from "./routes/products.route.js";

dotenv.config();

const PORT = process.env.SERVER_PORT || 8001;

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
server.use("/users", userRouter);
server.use("/products", productsRouter);

server.listen(PORT, () => {
  mongoDB();
  console.log("Está vivo!");
});
