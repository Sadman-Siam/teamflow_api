const discussion = require("../models/discussion");

async function getDiscussion(query) {
  try {
    const discussions = await discussion.find(query);
    if (!discussions) {
      return { success: false, message: "No discussions found" };
    }
    return { success: true, data: discussions };
  } catch (error) {
    console.error("Error fetching discussions:", error);
    return { success: false, message: "Error fetching discussions" };
  }
}

async function createDiscussion(discussionData) {
  try {
    const newDiscussion = new discussion(discussionData);
    await newDiscussion.save();
    return { success: true, data: newDiscussion };
  } catch (error) {
    console.error("Error creating discussion:", error);
    return { success: false, message: "Error creating discussion" };
  }
}

async function updateDiscussion(query = {}, data) {
  try {
    const updatedDiscussion = await discussion.findOneAndUpdate(query, data, {
      new: true,
    });
    if (!updatedDiscussion) {
      return { success: false, message: "Discussion not found" };
    }
    return { success: true, data: updatedDiscussion };
  } catch (error) {
    console.error("Error updating discussion:", error);
    return { success: false, message: "Error updating discussion" };
  }
}

async function deleteDiscussion(query = {}) {
  try {
    const deletedDiscussion = await discussion.findOneAndDelete(query);
    if (!deletedDiscussion) {
      return { success: false, message: "Discussion not found" };
    }
    return { success: true, data: deletedDiscussion };
  } catch (error) {
    console.error("Error deleting discussion:", error);
    return { success: false, message: "Error deleting discussion" };
  }
}

module.exports = {
  getDiscussion,
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
};
