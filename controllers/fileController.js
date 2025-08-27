const fileService = require("../services/fileService");

const uploadFile = async (req, res) => {
  const fileData = req.body;
  const result = await fileService.uploadFile(fileData);
  if (result.success) {
    return res.status(201).json({
      message: result.message,
    });
  } else {
    return res.status(500).json({
      message: result.message,
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

module.exports = {
  uploadFile,
  getFile,
  updateFile,
  deleteFile,
};
