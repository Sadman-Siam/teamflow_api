const userService = require("../services/userService");

const getUser = async (req, res) => {
  const query = req.query;
  const result = await userService.getUser(query);
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json({
      message: result.message,
    });
  }
};

const createUser = async (req, res) => {
  const userData = req.body;
  const result = await userService.createUser(userData);
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

const updateUser = async (req, res) => {
  const query = req.query;
  const data = req.body;
  const result = await userService.updateUser(query, data);
  if (result.success) {
    return res.status(200).json({
      message: result.message,
      user: result.data,
    });
  } else {
    return res.status(404).json({
      message: result.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const query = req.query;
  const result = await userService.deleteUser(query);
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
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
