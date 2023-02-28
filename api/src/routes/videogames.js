const express = require("express");
const { getAllvideogames } = require("../controllers/videogames");

const game = express.Router();

/* root */
game.get("/", getAllvideogames);

module.exports = game;
