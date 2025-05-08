const router = require("express").Router();

const {
  signUp,
  login,
  getLoggedInUser,
  protect,
} = require("../services/AuthService");

const {
  signUpValidator,
  loginValidator,
} = require("../utils/validator/AuthValidator");

router.post("/signUp", signUpValidator, signUp);
router.post("/login", loginValidator, login);
router.get("/me", protect, getLoggedInUser);

module.exports = router;
