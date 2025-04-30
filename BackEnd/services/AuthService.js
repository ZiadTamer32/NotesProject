const asyncHandler = require("express-async-handler");
const UserModel = require("../models/UserModel");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signUp = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.create({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(201).json({
    success: true,
    message: "Account created successfully",
    user,
    token,
  });
});

exports.login = asyncHandler(async (req, res) => {
  const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.status(200).json({
    success: true,
    message: "Login successfully",
    email: req.user.email,
    token,
  });
});

exports.protect = asyncHandler(async (req, res, next) => {
  // 1
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new ApiError("Not authorized to access this route", 401));
  }
  // 2
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  // 3
  const user = await UserModel.findById(decode.id);
  if (!user) {
    return next(new ApiError("User not found", 404));
  }
  req.user = user;
  next();
});

exports.getLoggedInUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});
