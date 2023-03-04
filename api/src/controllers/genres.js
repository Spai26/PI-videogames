const { URL_BASE, GENDER, API_KEY, Genre } = require("../db");
const axios = require("axios");

const getGenres = async (req, res, next) => {
  try {
    const apiGenres = await axios.get(`${URL_BASE}${GENDER}?key=${API_KEY}`, {
      responseType: "json",
    });

    const genresApi = apiGenres.data.results;

    const genresBD = await Promise.all(
      genresApi.map(async (g) => {
        const [genre, created] = await Genre.findOrCreate({
          where: { name: g.name },
          defaults: {
            id: g.id,
            name: g.name,
          },
        });
        return genre.toJSON(); // Devuelve los datos del registro creado/actualizado
      })
    );
    res.json({ data: genresBD });
  } catch (e) {
    (e) => {
      next(e);
    };
  }
};

module.exports = {
  getGenres,
};
