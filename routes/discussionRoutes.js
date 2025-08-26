const express = require("express");
const router = express.Router();

const {
  getDiscussion,
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
} = require("../controllers/discussionController");

router.get("/", getDiscussion);
router.post("/", createDiscussion);
router.put("/", updateDiscussion);
router.delete("/", deleteDiscussion);

module.exports = router;
