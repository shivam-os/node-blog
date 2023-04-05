const { validationResult } = require("express-validator");
const cloudinary = require("../config/cloudinary");
const upload = require("../config/multer");
const getDataUri = require("../config/datauri");
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
exports.createPost = async (req, res) => {
  try {
    //Handle errors from the post validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, author, category, status, content } = req.body;

    const file = req.file;
    console.log(file)
    const fileUri = getDataUri(file);

    //Upload file to cloudinary
    const uploadedImage = await cloudinary.uploader.upload(fileUri.content, {
      folder: "nodeblog",
      width: 1200,
      height: 628,
      crop: "crop",
    });

    //Create a post and save it in database
    await Post.create({
      title,
      author,
      featuredImage: {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      },
      category,
      status,
      content,
    });

    return res.status(201).json({ err: "Post created successfully!" });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ err: "An error has occured! Please try again later." });
  }
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
