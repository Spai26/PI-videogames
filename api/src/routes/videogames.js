const express = require("express");
const { API_KEY, URL_BASE, GAME } = require("../db");
const game = express.Router();
const axios = require("axios");

/* charger all info */
game.get("/", async (req, res) => {
  let TakeAllVideogames = [];
  let rawg_api = `${URL_BASE}${GAME}?key=${API_KEY}`;

  /* take 20 register from api */
  for (let i = 1; i <= 5; i++) {
    let result = await axios.get(rawg_api);
    /* containt next page with data */
    rawg_api = result.data.next;
    /* res.status(200).json({ data: result.data }); */
    result.data.results.forEach((g) => {
      TakeAllVideogames.push({
        id: g.id,
        name: g.name,
        rating: g.rating,
        image: g.background_image,
        review: g.reviews_count,
        released: g.released,
        platforms: g.platforms.map((platform) => platform.platform.name),
        genres: g.genres.map((genre) => genre.name),
        store: g.stores.map((store) => store.store.name),
      });
    });
  }
  res.status(200).json(TakeAllVideogames);
});

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
