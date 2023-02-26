const express = require("express");
const { getAllvideogames } = require("../controllers/videogames");

const game = express.Router();
const axios = require("axios");

/* root */
game.get("/", getAllvideogames);

game.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!isNaN(id)) {
      let keyId = Number(id);
      const result = await axios.get(`${URL_BASE}/${keyId}?key=${API_KEY}`);
      const game = result.data;
      res.json({ data: game });
    }
  } catch (error) {
    res.send(`Error route /videogames:id ${error}`);
  }
});

game.get("/{id}", (req, res) => {
  res.json({ msg: req.params });
});

game.post("/", (req, res) => {
  const { body } = req.body;
  res.status(200).json({
    msg: "recibe los datos del formulario por body y crea base de datos relacionado a tus generos",
  });
});

module.exports = game;
