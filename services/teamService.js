const Team = require("../models/team");

async function createTeam(teamData) {
  try {
    const team = new Team(teamData);
    await team.save();
    return { success: true, message: "Team created successfully" };
  } catch (error) {
    console.error("Error creating team:", error);
    return { success: false, message: "Error creating team" };
  }
}

async function getTeam(query = {}) {
  try {
    const teams = await Team.findOne(query);
    if (!teams) {
      return { success: false, message: "No teams found" };
    }
    return { success: true, data: teams };
  } catch (error) {
    console.error("Error fetching teams:", error);
    return { success: false, message: "Error fetching teams" };
  }
}

async function updateTeam(query = {}, data) {
  try {
    const team = await Team.findOneAndUpdate(query, data, {
      new: true,
      runValidators: true,
    });
    if (!team) {
      return { success: false, message: "Team not found" };
    }
    return { success: true, message: "Team updated successfully", data: team };
  } catch (error) {
    console.error("Error updating team:", error);
    return { success: false, message: "Error updating team" };
  }
}

async function deleteTeam(query = {}) {
  try {
    const team = await Team.findOneAndDelete(query);
    if (!team) {
      return { success: false, message: "Team not found" };
    }
    return { success: true, message: "Team deleted successfully" };
  } catch (error) {
    console.error("Error deleting team:", error);
    return { success: false, message: "Error deleting team" };
  }
}
module.exports = {
  createTeam,
  getTeam,
  updateTeam,
  deleteTeam,
};
