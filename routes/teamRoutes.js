const express = require("express");
const router = express.Router();
const {
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamController");

router.get("/", getTeam);
router.post("/", createTeam);
router.put("/", updateTeam);
router.delete("/", deleteTeam);

module.exports = router;
