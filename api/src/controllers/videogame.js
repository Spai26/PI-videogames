const { API_KEY, URL_BASE, GAME, Videogame, Genre } = require("../db");
const axios = require("axios");

const addVideogame = async (
  name,
  description,
  platform,
  image,
  date_up,
  rating,
  genres
) => {
  const findGen = await Genre.findAll({ where: { name: genres } });

  const addGame = await Videogame.create({
    name: name,
    description: description,
    platform: platform.toString(),
    image: image,
    date_up: date_up,
    rating: rating,
  });
  await addGame.addGenre(findGen);

  return addGame;
};

const getDetailVideogame = async (id, origin) => {
  //recibe el parametro de id
  let videogame;
  let rawgApi = `${URL_BASE}${GAME}/${id}?key=${API_KEY}`;

  if (origin === "api") {
    /* id number */
    const detail = await axios.get(rawgApi);

    if (detail.data.id) {
      //esperando mejora.
      let stringGenres = [];
      for (let g of detail.data.genres) {
        stringGenres.push(g.name);
      }
      let stringPlatforms = [];
      for (let p of detail.data.platforms) {
        stringPlatforms.push(p.platform.name);
      }

      videogame = {
        name: detail.data.name,
        description: detail.data.description.replace(/<[^>]+>/g, ""),
        platform: stringPlatforms.toString(),
        released: detail.data.released,
        image: detail.data.background_image,
        rating: detail.data.rating,
        genres: stringGenres.toString(),
      };
    }
  } else {
    videogame = await Videogame.findByPk(id);
  }
  return videogame;
};

module.exports = {
  addVideogame,
  getDetailVideogame,
};
