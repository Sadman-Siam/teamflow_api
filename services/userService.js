const User = require("../models/user");

async function createUser(userData) {
  try {
    const user = new User(userData);
    await user.save();
    return { success: true, message: "User created successfully" };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Error creating user" };
  }
}

async function getUser(query = {}) {
  try {
    const users = await User.findOne(query);
    if (!users) {
      return { success: false, message: "No users found" };
    }
    return { success: true, data: users };
  } catch (error) {
    console.error("Error fetching users:", error);
    return { success: false, message: "Error fetching users" };
  }
}

async function updateUser(query = {}, data) {
  try {
    const user = await User.findOneAndUpdate(query, data, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return { success: false, message: "User not found" };
    }
    return { success: true, message: "User updated successfully", data: user };
  } catch (error) {
    console.error("Error updating user:", error);
    return { success: false, message: "Error updating user" };
  }
}

async function deleteUser(query = {}) {
  try {
    const user = await User.findOneAndDelete(query);
    if (!user) {
      return { success: false, message: "User not found" };
    }
    return { success: true, message: "User deleted successfully" };
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, message: "Error deleting user" };
  }
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
