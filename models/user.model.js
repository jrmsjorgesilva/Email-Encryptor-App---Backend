import mongoose from "mongoose";

export const UserModel = mongoose.model("EmailEncryptorAppUser", {
  name: String,
  lastName: String,
  address: String,
  favoriteProduct: Number,
  email: String,
  isEmailReceiver: {
    type: Boolean,
    default: false,
  },
});
