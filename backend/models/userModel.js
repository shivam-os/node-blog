const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
  },

  email: {
    type: String,
    required: true,
    maxLength: 50,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
