const File = require("../models/file");

async function getFile(query = {}) {
  try {
    // If no specific query, find all files for the team
    if (
      Object.keys(query).length === 0 ||
      (query.teamName && !query._id && !query.fileName)
    ) {
      const files = await File.find(query).select("-data"); // Exclude file data for listing
      if (!files || files.length === 0) {
        return { success: false, message: "No files found" };
      }
      return { success: true, data: files };
    } else {
      // Find specific file (including data for download)
      const file = await File.findOne(query);
      if (!file) {
        return { success: false, message: "No file found" };
      }
      return { success: true, data: file };
    }
  } catch (error) {
    console.error("Error fetching files:", error);
    return { success: false, message: "Error fetching files" };
  }
}

async function uploadFile(fileData) {
  try {
    const newFile = new File(fileData);
    await newFile.save();
    return {
      success: true,
      message: "File uploaded successfully",
      data: newFile,
    };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { success: false, message: "Error uploading file" };
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
  uploadFile,
  getFile,
  createFile,
  updateFile,
  deleteFile,
};
