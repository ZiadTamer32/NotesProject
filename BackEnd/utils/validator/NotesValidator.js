const { body, check } = require("express-validator");
const ErrorValidator = require("../../middleware/ErrorValidator");

exports.addNotesValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be more than 3 characters")
    .isLength({ max: 32 })
    .withMessage("Title must be less than 32 characters"),
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 3 })
    .withMessage("Description must be more than 3 characters")
    .isLength({ max: 64 })
    .withMessage("Description must be less than 64 characters"),
  body("tags").optional().isArray().withMessage("Tags must be an array"),
  ErrorValidator,
];

exports.editNotesValidator = [
  check("id").isMongoId().withMessage("Invalid note id"),
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be more than 3 characters")
    .isLength({ max: 32 })
    .withMessage("Title must be less than 32 characters"),
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 3 })
    .withMessage("Description must be more than 3 characters")
    .isLength({ max: 64 })
    .withMessage("Description must be less than 64 characters"),
  body("tags").optional().isArray().withMessage("Tags must be an array"),
  ErrorValidator,
];

exports.deleteNotesValidator = [
  check("id").isMongoId().withMessage("Invalid note id"),
  ErrorValidator,
];
