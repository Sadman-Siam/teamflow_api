const express = require("express");
const multer = require("multer");
const {
  uploadFile,
  getFile,
  updateFile,
  deleteFile,
  downloadFile,
} = require("../controllers/fileController.js");

const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory as Buffer
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit for small files
  },
  fileFilter: (req, file, cb) => {
    // Restrict to specific file types for security
    const allowedTypes = [
      "text/plain", // .txt files
      "application/pdf", // .pdf files
      "image/jpeg", // .jpg, .jpeg files
      "image/png", // .png files
      "image/gif", // .gif files
      "image/webp", // .webp files
      "image/svg+xml", // .svg files
    ];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "Only TXT, PDF, and image files (JPG, PNG, GIF, WebP, SVG) are allowed"
        ),
        false
      );
    }
  },
});

router.get("/", getFile);
router.get("/download", downloadFile);
router.post(
  "/",
  (req, res, next) => {
    upload.single("file")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({
            message: "File too large. Maximum size is 5MB.",
          });
        }
        return res.status(400).json({
          message: "File upload error: " + err.message,
        });
      } else if (err) {
        return res.status(400).json({
          message: err.message,
        });
      }
      next();
    });
  },
  uploadFile
);
router.put("/", updateFile);
router.delete("/", deleteFile);

module.exports = router;
