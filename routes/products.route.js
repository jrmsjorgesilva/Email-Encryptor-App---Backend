import express from "express";
import {
  addProducts,
  deleteProducts,
  getProducts,
  getProductsById,
  updateProducts,
} from "../controller/products.controller.js";

export const productsRouter = express.Router();

productsRouter
  .get("/", getProducts)
  .post("/", addProducts)
  .get("/:id", getProductsById)
  .put("/:id", updateProducts)
  .delete("/:id", deleteProducts);
