const { URL_BASE, GENDER, API_KEY, Genre } = require("../db");
const axios = require("axios");

const getGenres = async (req, res, next) => {
  try {
    const apiGenres = await axios.get(`${URL_BASE}${GENDER}?key=${API_KEY}`, {
      responseType: "json",
    });

    const genresApi = apiGenres.data.results;
    console.log(genresApi);
    genresApi.map(async (g) => {
      await Genre.findOrCreate({
        where: { name: g.name },
        defaults: {
          id: g.id,
          name: g.name,
        },
      });
    });
    res.json({ data: genresApi });
  } catch (e) {
    (e) => {
      next(e);
    };
  }
};

module.exports = {
  getGenres,
};
