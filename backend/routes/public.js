const path = require("path");
const express = require("express");
const router = express.Router();

// Example route for serving an image
router.get("/image/:filename", (req, res) => {
  const filename = req.params.filename;
  res.sendFile(path.join(__dirname, "public/images", filename));
});

module.exports = router;
