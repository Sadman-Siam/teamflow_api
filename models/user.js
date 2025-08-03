const express = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  team: [
    {
      teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
    },
  ],
  teamRequests: [
    {
      teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
  assignedTasks: [
    {
      taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
