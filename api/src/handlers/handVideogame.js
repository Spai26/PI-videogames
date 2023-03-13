const {
  addVideogame,
  getDetailVideogame,
} = require("../controllers/videogame");

/**
 * TODO: middleware videogame
 * ! add new videogame
 * @param {*} req.body
 * ? recibe los atributos por un form
 */

const handAddVideogame = async (req, res) => {
  try {
    let { name, description, platforms, image, date_up, rating, genres } =
      req.body;

    const newVideogame = await addVideogame(
      name,
      description,
      platforms,
      image,
      date_up,
      rating,
      genres
    );

    res.status(201).json({ data: "videogame created" });
  } catch (e) {
    res.status(400).json({ error: `fron handAddVideogame ${e.message}` });
  }
};

/**
 * TODO: middleware videogame
 * ! view detail videogame
 * * consulta de id tanto de api como de bd
 * @param {*} origin
 * ? determina el tipo de id que ingresa
 */
const handDetailVideogame = async (req, res) => {
  const { id } = req.params;

  const origin = isNaN(id) ? "bd" : "api";
  try {
    const dataDetail = await getDetailVideogame(id, origin);

    res.status(200).json({ data: dataDetail });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = {
  handAddVideogame,
  handDetailVideogame,
};
