import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const mongoURI = `mongodb+srv://${process.env.MONGO_DATABASE_USER}:${process.env.MONGO_DATABASE_PASS}@restapiboilerplateclust.5vrtx.mongodb.net/?retryWrites=true&w=majority&appName=RestAPIBoilerplateCluster`;

export const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Mongo database conected!");
  } catch (err) {
    return console.error(err);
  }
};
