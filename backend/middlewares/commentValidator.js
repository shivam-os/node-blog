const { body } = require("express-validator");

exports.createComment = [
  body("userEmail")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email field cannot be empty!")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid email address!"),

  body("userText")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Comment field cannot be empty!")
    .isLength({ min: 3 })
    .withMessage("Comment field must contain minimum 3 characters!"),
];
