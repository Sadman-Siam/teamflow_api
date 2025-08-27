const express = require("express");
const multer = require("multer");
const {
  uploadFile,
  getFile,
  updateFile,
  deleteFile,
} = require("../controllers/fileController.js");

const router = express.Router();
const upload = multer();

router.get("/", getFile);
router.post("/", upload.single("file"), uploadFile);
router.put("/", updateFile);
router.delete("/", deleteFile);

module.exports = router;
