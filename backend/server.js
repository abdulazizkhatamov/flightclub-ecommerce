require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const publicRoutes = require("./routes/public");

// Middleware
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(publicRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
