const teamService = require("../services/teamService");

const getTeam = async (req, res) => {
  const query = req.query;
  const result = await teamService.getTeam(query);
  if (result.success) {
    return res.status(200).json({
      data: result.data,
    });
  } else {
    return res.status(404).json({
      message: result.message,
    });
  }
};

const createTeam = async (req, res) => {
  const teamData = req.body;
  const result = await teamService.createTeam(teamData);
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

const updateTeam = async (req, res) => {
  const query = req.query;
  const data = req.body;
  const result = await teamService.updateTeam(query, data);
  if (result.success) {
    return res.status(200).json({
      message: result.message,
      data: result.data,
    });
  } else {
    return res.status(404).json({
      message: result.message,
    });
  }
};

const deleteTeam = async (req, res) => {
  const query = req.query;
  const result = await teamService.deleteTeam(query);
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
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
};
