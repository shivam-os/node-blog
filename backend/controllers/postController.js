const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

/*
------ Public Routes ------
*/

//GET method to get all posts
exports.getPosts = (req, res) => {
  res.send("Not implemented!");
};

//GET method to get a single post with given id
exports.getSinglePost = (req, res) => {
  res.send("Not implemented!");
};

//POST method to add comment to a post with given id
exports.addComment = (req, res) => {
  res.send("Not implemented!");
};

/*
------ Protected Routes ------
*/

//POST method to create a new post
exports.createPost = (req, res) => {
  res.send("Not implemented!");
};

//PUT method to update an existing post with given id
exports.updatePost = (req, res) => {
  res.send("Not implemented!");
};

//DELETE method to delete an existing post with given id
exports.deletePost = (req, res) => {
  res.send("Not implemented!");
};

//DELETE method to delete a comment from a post with given id
exports.deleteComment = (req, res) => {
  res.send("Not implemented!");
};
