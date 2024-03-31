// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const cron = require("node-cron");
const cookieParser = require("cookie-parser");
const userController = require("./controllers/userController");
const authController = require("./controllers/authController");
const teapotsController = require("./controllers/teapotsController");

// CONFIGURATION
const app = express();

cron.schedule("*/10 * * * *", () => {
  const currentTime = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  console.log(`Running a task every 10 minutes. Current time: ${currentTime}`);
});

// MIDDLEWARE
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userController);
app.use("/api/auth", authController);
app.use("/api/teapots", teapotsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to TeaWhips!");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
