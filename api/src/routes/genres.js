const express = require("express");
const { getGenres } = require("../controllers/genre");
const genres = express.Router();

genres.get("/", getGenres);

module.exports = genres;
