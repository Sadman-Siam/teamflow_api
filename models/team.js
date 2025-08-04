const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdby: {
    name: String,
    required: true,
  },
  members: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      role: {
        type: String,
        enum: ["admin", "member"],
        default: "member",
      },
    },
  ],
  teamTasks: [
    {
      taskName: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["todo", "in-progress", "done"],
        default: "todo",
      },
      assignedTo: {
        type: String,
        required: true,
      },
    },
  ],
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
