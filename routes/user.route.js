import express from "express";
import {
  addUser,
  deleteUser,
  getUser,
  getUserById,
  updateUser,
} from "../controller/user.controller.js";

export const userRouter = express.Router();

userRouter
  .get("/", getUser)
  .post("/", addUser)
  .get("/:id", getUserById)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);
