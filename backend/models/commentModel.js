const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },

  userEmail: {
    type: String,
    maxLength: 50,
    required: true,
  },

  userText: {
    type: String,
    required: true,
  },
});
