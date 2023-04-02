const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    maxLength: 100,
    required: true,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  featuredImage: {
    type: String,
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: "Uncategorized",
  },

  content: {
    type: String,
    required: true,
  },

  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Post", PostSchema);
