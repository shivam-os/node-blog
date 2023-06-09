const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  featuredImage: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    },
  },

  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    default: "Uncategorized",
  },

  status: {
    type: String,
    required: true,
    enum: ["Published", "Unpublished"],
    default: "Unpublished",
  },

  content: {
    type: String,
    required: true,
  },
});

PostSchema.set("timestamps", true);

module.exports = mongoose.model("Post", PostSchema);
