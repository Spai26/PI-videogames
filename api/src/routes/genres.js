const express = require("express");
const genres = express.Router();

genres.get("/", (req, res) => {
  res.status(200).json({ msg: "this generes" });
});

module.exports = genres;
