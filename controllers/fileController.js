const fileService = require("../services/fileService");

const uploadFile = async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    // Extract required fields from query parameters or body
    const { userName, teamName } =
      req.query.userName && req.query.teamName ? req.query : req.body;

    // Validate required fields
    if (!userName || !teamName) {
      return res.status(400).json({
        message:
          "userName and teamName are required (can be sent as query params or in body)",
      });
    }

    const fileData = {
      userName,
      teamName,
      fileName: req.file.originalname,
      originalName: req.file.originalname,
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };

    const result = await fileService.uploadFile(fileData);

    if (result.success) {
      return res.status(201).json({
        message: result.message,
        file: {
          id: result.data._id,
          fileName: result.data.fileName,
          originalName: result.data.originalName,
          contentType: result.data.contentType,
          size: result.data.data.length,
          userName: result.data.userName,
          teamName: result.data.teamName,
          uploadedAt: result.data.createdAt || new Date(),
        },
      });
    } else {
      return res.status(500).json({
        message: result.message,
      });
    }
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({
      message: "Internal server error during file upload",
    });
  }
};

const getFile = async (req, res) => {
  const query = req.query;
  const result = await fileService.getFile(query);
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json({
      message: result.message,
    });
  }
};

const updateFile = async (req, res) => {
  const query = req.query;
  const data = req.body;
  const result = await fileService.updateFile(query, data);
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json({
      message: result.message,
    });
  }
};

const deleteFile = async (req, res) => {
  const query = req.query;
  const result = await fileService.deleteFile(query);
  if (result.success) {
    return res.status(200).json({
      message: result.message,
    });
  } else {
    return res.status(404).json({
      message: result.message,
    });
  }
};

const downloadFile = async (req, res) => {
  try {
    const query = req.query;
    const result = await fileService.getFile(query);

    if (result.success) {
      const file = result.data;

      // Set headers for file download
      res.set({
        "Content-Type": file.contentType,
        "Content-Disposition": `attachment; filename="${file.originalName}"`,
        "Content-Length": file.data.length,
      });

      // Send the file data
      return res.send(file.data);
    } else {
      return res.status(404).json({
        message: result.message,
      });
    }
  } catch (error) {
    console.error("Download error:", error);
    return res.status(500).json({
      message: "Error downloading file",
    });
  }
};

module.exports = {
  uploadFile,
  getFile,
  updateFile,
  deleteFile,
  downloadFile,
};
