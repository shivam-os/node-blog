const { body } = require("express-validator");

exports.createPost = [
  body("title")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Post title cannot be empty!")
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Post title must contain minium 3 letters and maximum 100 letters!"
    ),

  body("author")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Author field cannot be empty!"),

  body("category")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Category field cannot be empty!"),

  body("status")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Author field cannot be empty!")
    .isIn(["Unpublished", "Published"])
    .withMessage("Status field contains invalid values!"),

  body("content")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Content field cannot be empty!")
    .isLength({ min: 50 })
    .withMessage("Content field must contain minimum 50 characters!"),
];
