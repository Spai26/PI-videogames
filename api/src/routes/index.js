const { Router } = require("express");
const router = Router();

// Importar todos los routers;
const videogames = require("./videogames");
const genres = require("./genres");

// Ejemplo: const authRouter = require('./auth.js');
router.use("/genres", genres);
router.use("/videogames", videogames);

module.exports = router;
