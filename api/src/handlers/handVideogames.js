const {
  getAllvideogames,
} = require("../controllers/requestVideogame/videogames");
const { searchGame } = require("../controllers/requestVideogame/searchGame");

/**
 * TODO: midleware videogames
 * @param {*} req.query
 * ? puede recibir o no query
 * ! extrae todos los videogames API && BD
 * ! consultar el nombre de videogames
 */
const handGetAllVideogames = async (req, res, next) => {
  const name = req.query.name;
  if (name) {
    console.log("entro en search");
    try {
      const results = await searchGame(name);
      return res.json(results);
    } catch (e) {
      next(e);
    }
  }

  try {
    console.log("entro en general");
    const results = await getAllvideogames();
    res.status(200).json({ data: results });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  handGetAllVideogames,
};
