const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "User name is required"],
      minLength: [3, "must be more than 3"],
      maxLength: [32, "must be less than 32"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      minLength: [3, "must be more than 3"],
      maxLength: [32, "must be less than 32"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "must be more than 6"],
    },
  },
  {
    timestamps: true,
  }
);
const UserModel = mongoose.model("UserNotes", userSchema);
module.exports = UserModel;
