const router = require("express").Router();

const { signUp, login } = require("../services/AuthService");

const {
  signUpValidator,
  loginValidator
} = require("../utils/validator/AuthValidator");

router.post("/signUp", signUpValidator, signUp);
router.post("/login", loginValidator, login);

module.exports = router;
