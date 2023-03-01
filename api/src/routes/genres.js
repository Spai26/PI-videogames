const express = require("express");
const { getGenres } = require("../controllers/genres");
const genres = express.Router();

genres.get("/", getGenres);

module.exports = genres;
