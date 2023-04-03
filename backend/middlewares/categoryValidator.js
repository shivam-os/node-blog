const { body } = require("express-validator");

exports.createCategory = [
  body("categoryName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Category field cannot be empty!")
    .isLength({ min: 3, max: 50 })
    .withMessage(
      "Category must contain minimum 3 letters and maximum 50 letters!"
    ),
];
