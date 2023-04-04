const { validationResult } = require("express-validator");
const Category = require("../models/categoryModel");

/*
------ Public Routes ------
*/

//GET method to get posts with matching category name
exports.getCategoryPosts = (req, res) => {
  res.send("Not implemented!");
};

/*
------ Protected Routes ------
*/

//POST method to create a new category
exports.createCategory = async (req, res) => {
  try {
    //Handle errors coming from the category validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check if category already exists in the database
    const existingCategory = await Category.findOne({ name: req.body.name });
    if (existingCategory) {
      return res.status(400).json({
        err: "Category with given name already exists! Either use the current one or choose another name.",
      });
    }

    //Create new category if it does not exist in the database
    const newCategory = await Category.create({ name: req.body.name });
    return res
      .status(201)
      .json({ msg: `Category with name ${req.body.name} is created!` });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: "An error has occured! Please try again later." });
  }
};

//PUT method to update an existing category with given id
exports.updateCategory = async (req, res) => {
  try {
    //Handle errors coming from the create category validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check if category already exists in the database
    const existingCategory = await Category.findOne({ name: req.body.name });
    if (existingCategory) {
      return res.status(400).json({
        err: "Category with given name already exists! Either use the current one or choose another name.",
      });
    }

    //Update category by id
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    });

    //If category not found
    if (!updatedCategory) {
      return res
        .status(404)
        .json({ err: "Category with given id does not exist!" });
    }

    return res
      .status(200)
      .json({ msg: `Category is updated with new name as ${req.body.name}` });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: "An error has occured! Please try again later." });
  }
  res.send("Not implemented!");
};

//DELETE method to delete an existing category with given id
exports.deleteCategory = async (req, res) => {
  try {
    //Find the category by id and delete
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);
    console.log((deletedCategory))
    //If category not found
    if (!deletedCategory) {
      return res
        .status(404)
        .json({ err: "Category with given id does not exist!" });
    }

    return res.status(204).json({ err: "Category with given id is deleted!" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: "An error has occured! Please try again later." });
  }
};
