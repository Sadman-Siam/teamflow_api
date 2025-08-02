// Placeholder controller functions
const getUser = (req, res) => {
  res.status(200).json({
    message: "Get user endpoint",
    data: [],
  });
};

const createUser = (req, res) => {
  res.status(201).json({
    message: "Create user endpoint",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  res.status(200).json({
    message: "Update user endpoint",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    message: "Delete user endpoint",
  });
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
