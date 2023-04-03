const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

/*
------ Public Routes ------
*/

//GET method to get all posts
router.get("/", postController.getPosts);

//GET method to get a single post with given id
router.get("/:id", postController.getSinglePost);

//POST method to add a comment to a post with given id
router.post("/:id/comment", postController.addComment);

/*
------ Protected Routes ------
*/

//POST method to get create a post
router.post("/create", postController.createPost);

//PUT method to update a post with given id
router.put("/:id", postController.updatePost);

//DELETE method to delete a post with given id
router.delete("/:id", postController.deletePost);

//DELETE method to delete a comment from a post with given post Id and comment Id
router.delete("/:id/:commentId", postController.deleteComment);

module.exports = router;
