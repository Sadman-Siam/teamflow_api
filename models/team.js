const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  owner: {
    type: String,
  },
  ownerEmail: {
    type: String,
  },
  members: [
    {
      userName: {
        type: String,
      },
      userEmail: {
        type: String,
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
      },
      description: {
        type: String,
      },
      status: {
        type: String,
        enum: ["todo", "in-progress", "done"],
        default: "todo",
      },
      assignedTo: [
        {
          userName: {
            type: String,
          },
        },
      ],
      dueDate: {
        type: Date,
      },
    },
  ],
  teamLog: [
    {
      userName: {
        type: String,
      },
      action: {
        type: String,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
