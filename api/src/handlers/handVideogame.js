const {
  addVideogame,
  getDetailVideogame,
} = require("../controllers/videogame");

/**
 * TODO: Add new  videogame for database
 * @param {*} req.body
 */
const handAddVideogame = async (req, res) => {
  try {
    let { name, description, platform, image, date_up, rating, genres } =
      req.body;

    const newVideogame = await addVideogame(
      name,
      description,
      platform,
      image,
      date_up,
      rating,
      genres
    );

    res.status(201).json({ data: "videogame created" });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

/**
 * TODO: Take id from params for view detail videogame
 * @param {*} origin
 * *  puede ser tanto api || bd
 */
const handDetailVideogame = async (req, res) => {
  const { id } = req.params;
  console.log(id);
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
