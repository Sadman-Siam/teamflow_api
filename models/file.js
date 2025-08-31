const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const File = mongoose.model("File", fileSchema);
module.exports = File;
