import mongoose from "mongoose";

export const ProductsModel = mongoose.model("EmailEncryptorAppProducts", {
  name: String,
  price: Number,
  isPromo: {
    type: Boolean,
    default: false,
  },
  category: Number,
});
