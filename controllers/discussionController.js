const discussionService = require("../services/discussionService");

const getDiscussion = async (req, res) => {
  const query = req.query;
  const result = await discussionService.getDiscussion(query);
  if (result.success) {
    return res.status(200).json(result.data);
  } else {
    return res.status(404).json({
      message: result.message,
    });
  }
};

const createDiscussion = async (req, res) => {
  const discussionData = req.body;
  const result = await discussionService.createDiscussion(discussionData);
  if (result.success) {
    return res.status(201).json(result.data);
  } else {
    return res.status(400).json({
      message: result.message,
    });
  }
};

const updateDiscussion = async (req, res) => {
  const query = req.query;
  const data = req.body;
  const result = await discussionService.updateDiscussion(query, data);
  if (result.success) {
    return res.status(200).json({
      message: result.message,
      discussion: result.data,
    });
  } else {
    return res.status(404).json({
      message: result.message,
    });
  }
};

const deleteDiscussion = async (req, res) => {
  const query = req.query;
  const result = await discussionService.deleteDiscussion(query);
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
  getDiscussion,
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
};
