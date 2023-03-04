const axios = require("axios");
const { API_KEY, URL_BASE, GAME, Videogame, Genre } = require("../db");

const getAllvideogames = async () => {
  let TakeAllVideogames = [];
  let rawg_api = `${URL_BASE}${GAME}?key=${API_KEY}`;

  let gameBD = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });
  gameBD.forEach((g) => {
    TakeAllVideogames.push({
      id: g.dataValues.id,
      name: g.dataValues.name,
      rating: g.dataValues.rating,
      image: g.dataValues.image,
      platform: g.dataValues.platform,
      released: g.dataValues.date_up,
      genre: g.dataValues.genres.map((genre) => genre.dataValues.name),
      origin: "bd",
    });
  });

  /* take 20 register from api */
  for (let i = 1; i <= 5; i++) {
    let result = await axios.get(rawg_api);
    /* containt next page with data */
    rawg_api = result.data.next;

    result.data.results.forEach((g) => {
      TakeAllVideogames.push({
        id: g.id,
        name: g.name,
        rating: g.rating,
        image: g.background_image,
        released: g.released,        
        genres: g.genres.map((genre) => genre.name),
        origin: "api",
      });
    });
  }
  /* console.log([...TakeAllVideogames, ...gameBD]); */
  return TakeAllVideogames;
};

module.exports = {
  getAllvideogames,
};
