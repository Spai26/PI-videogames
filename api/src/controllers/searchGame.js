const { Videogame, Genre } = require("../db");
const { Op } = require("sequelize");

const searchGame = async (search) => {
  const a = search.split(" ");
  const finds = [];
  console.log(search);
  /* const gameBD = await Videogame.findAll({
    where: { name: { [Op.like]: `%${search}` } },
    includes: {
      model: Genre,
    },
  });
  console.log(gameBD); */
};
module.exports = {
  searchGame,
};
