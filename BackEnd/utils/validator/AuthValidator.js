const { body } = require("express-validator");
const bcrypt = require("bcryptjs");
const ErrorValidator = require("../../middleware/ErrorValidator");
const UserModel = require("../../models/UserModel");

exports.signUpValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is not valid")
    .custom((value) => {
      return UserModel.findOne({ email: value }).then((user) => {
        if (user) {
          return Promise.reject("Email already in use");
        }
      });
    }),
  body("password").notEmpty().withMessage("Password is required"),
  ErrorValidator,
];

exports.loginValidator = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email is not valid")
    .custom(async (value, { req }) => {
      const user = await UserModel.findOne({ email: value });
      if (!user) {
        throw new Error("User not found");
      }
      req.user = user;
      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .custom(async (value, { req }) => {
      const user = await UserModel.findOne({ email: req.user.email });
      if (!user) {
        throw new Error("Invalid credentials");
      }
      const isMatch = await bcrypt.compare(value, user.password);
      if (!isMatch) {
        throw new Error("Invalid credentials");
      }
    }),

  ErrorValidator,
];
