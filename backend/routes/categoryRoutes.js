const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

/*
------ Public Routes ------
*/

//GET method to get posts matching the given category name
router.get("/:categoryName", categoryController.getCategoryPosts);

/*
------ Protected Routes ------
*/

//POST method to create a new category
router.post("/create", categoryController.createCategory);

//PUT method to update an existing category with given id
router.put("/:id", categoryController.updateCategory);

//DELETE method to delete an existing category with given id
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
