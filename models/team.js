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
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
