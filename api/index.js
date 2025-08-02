const express = require("express");
const router = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
const userRoutes = require("../routes/userRoutes");
app.use("/users", userRoutes);

//test route
router.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running",
    welcome: "Welcome to the Teamflow API",
  });
});

// Use the router
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
