const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Discussion = mongoose.model("Discussion", discussionSchema);

module.exports = Discussion;
