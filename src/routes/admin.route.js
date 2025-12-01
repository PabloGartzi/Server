const express = require("express");
const router = express.Router();
const { getTodasLasPelis, getPeliculaPorID, anadirPelicula } = require("../controllers/admin.controller");


// importar controladores

// importar middlewares


// Ruta crear pelicula

router.post('/createMovie', /* valicacion , */anadirPelicula)

//Ruta editar película

router.put('/editMovie',/* valicacion , */editMovie)

//Ruta eliminar pelicula

router.delete('/removeMovie',/* valicacion , */deleteMovie)



module.exports = router;