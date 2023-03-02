const express = require("express");
const {
  handAddVideogame,
  handDetailVideogame,
} = require("../handlers/handVideogame");
const { handGetAllVideogames } = require("../handlers/handVideogames");

/**
 * @param middleware
 * @param videogames
 */
const game = express.Router();

game.get("/", handGetAllVideogames);
game.post("/", handAddVideogame);
game.get("/:id", handDetailVideogame);

module.exports = game;
