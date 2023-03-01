const express = require("express");
const { getAllvideogames } = require("../controllers/videogames");
const {
  addVideogame,
  getDetailVideogame,
} = require("../controllers/videogame");

const game = express.Router();

/* root */
game.get("/", getAllvideogames);
game.post("/", addVideogame);
game.get("/:id", getDetailVideogame);

module.exports = game;
/* 
get  - localhost:3001/videogames/ => getAllVideogames  retorna un [ { videogame }]
post - localhost:3001/videogames/ => addNewVideogame
recibe por body la info
id se crea automatico
nombre
description
plataformas
imagen
fecha de lanzamiento
rating 

crearlo en la bd y relacionado con sus generos 

get  - localhost:3001/videogames/:id => getDetailVideogame  
retorna detalle de videogame
tanto de API como de BD

get  - localhost:3001/videogames/name?='request' 
retarna los 15 videojuegos
puede tener mayus o min0us 
si no existe mensaje ""
Debe buscar de api y db
*/
