const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const categoryValidator = require("../middlewares/categoryValidator");

/*
------ Public Routes ------
*/

//GET method to get posts matching the given category name
router.get("/:categoryName", categoryController.getCategoryPosts);

/*
------ Protected Routes ------
*/

//POST method to create a new category
router.post(
  "/create",
  categoryValidator.createCategory,
  categoryController.createCategory
);

//PUT method to update an existing category with given id
router.put(
  "/:id",
  categoryValidator.createCategory,
  categoryController.updateCategory
);

//DELETE method to delete an existing category with given id
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
