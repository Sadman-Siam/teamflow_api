const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema({
  teamName: {
    type: String,
  },
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
