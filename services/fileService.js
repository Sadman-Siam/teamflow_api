const File = require("../models/file");

async function getFile(query = {}) {
  try {
    const getFile = await File.findOne(query);
    if (!getFile) {
      return { success: false, message: "No file found" };
    }
    return { success: true, data: getFile };
  } catch (error) {
    console.error("Error fetching files:", error);
    return { success: false, message: "Error fetching files" };
  }
}

async function createFile(fileData) {
  try {
    const newFile = new File(fileData);
    await newFile.save();
    return { success: true, data: newFile };
  } catch (error) {
    console.error("Error creating file:", error);
    return { success: false, message: "Error creating file" };
  }
}

async function updateFile(query = {}, data) {
  try {
    const updatedFile = await File.findOneAndUpdate(query, data, {
      new: true,
    });
    if (!updatedFile) {
      return { success: false, message: "File not found" };
    }
    return { success: true, data: updatedFile };
  } catch (error) {
    console.error("Error updating file:", error);
    return { success: false, message: "Error updating file" };
  }
}

async function deleteFile(query = {}) {
  try {
    const deletedFile = await File.findOneAndDelete(query);
    if (!deletedFile) {
      return { success: false, message: "File not found" };
    }
    return { success: true, data: deletedFile };
  } catch (error) {
    console.error("Error deleting file:", error);
    return { success: false, message: "Error deleting file" };
  }
}

module.exports = {
  getFile,
  createFile,
  updateFile,
  deleteFile,
};
