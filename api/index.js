const express = require("express");
const router = express.Router();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const PORT = 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// MongoDB connection
let isConnected = false;
const connectDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    isConnected = false;
    throw error;
  }
};
//routes
const userRoutes = require("../routes/userRoutes");
const teamRoutes = require("../routes/teamRoutes");

app.use("/", router);
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);

//test route
router.get("/", (req, res) => {
  res.status(200).json({
    message: "API is running",
    welcome: "Welcome to the Teamflow API",
  });
});

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
