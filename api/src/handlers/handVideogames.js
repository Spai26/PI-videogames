const { getAllvideogames } = require("../controllers/videogames");
const { searchGame } = require("../controllers/searchGame");
/**
 * TODO: take all videogame from DB and API
 * @param {*} Videogame
 * * content all videogames from api and bd
 */
const handGetAllVideogames = async (req, res, next) => {
  const search = req.query.name;

  /* if (search) {
    try {
      const result = await searchGame(search);
      res.status(200).json(result);
    } catch (e) {
      next(e);
    }
  } */

  try {
    const result = await getAllvideogames();
    res.status(200).json({ data: result });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = {
  handGetAllVideogames,
};
