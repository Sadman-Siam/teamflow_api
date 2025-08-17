const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
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
      teamName: {
        type: String,
      },
    },
  ],
  teamRequests: [
    {
      teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
      },
      teamName: {
        type: String,
      },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
