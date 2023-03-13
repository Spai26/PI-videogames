const { Videogame, Genre, URL_BASE, GAME, API_KEY } = require("../../db");
const { Op } = require("sequelize");
const axios = require("axios");

const searchGame = async (name) => {
  console.log("controller=>search");
  let results = [];

  let rawg_api = `${URL_BASE}${GAME}?search=${name}&key=${API_KEY}`;
  const gameBD = await Videogame.findAll({
    where: { name: { [Op.like]: `%${name}%` } },
    include: Genre,
  });

  const data =
    gameBD &&
    gameBD.map((g) => ({
      id: g.dataValues.id,
      name: g.dataValues.name,
      rating: g.dataValues.rating,
      image: g.dataValues.image,
      released: g.dataValues.date_up,
      platforms: g.dataValues.platforms,
      genres: g.dataValues.genres,
      origin: "bd",
    }));

  data.forEach((g) => results.push(g));

  for (let i = 1; i <= 5; i++) {
    let responseApi = await axios.get(rawg_api);

    rawg_api = responseApi.data.next;

    const apiData =
      responseApi.data.results &&
      responseApi.data.results.map((v) => ({
        id: v.id,
        name: v.name,
        rating: v.rating,
        image: v.background_image,
        released: v.released,
        platforms: v.platforms && v.platforms.map((p) => p.platform.name),
        genres: v.genres.map((genre) => genre.name),
        origin: "api",
      }));

    const filterApi = apiData.filter((g) =>
      g.name.toLowerCase().includes(name)
    );

    filterApi.map((f) => {
      results.push(f);
    });

    return results;
  }

  if (!results.length) {
    return results.push({
      id: "",
      name: "No se han encontrado resultados",
      image: "",
      genres: "",
      rating: "",
      platforms: "",
      origin: "",
    });
  }

  return results;
};
module.exports = {
  searchGame,
};
