const express = require("express");
const router = express.Router();
const { getTodasLasPelis, getPeliculaPorID, anadirPelicula, editarPelicula, borrarPelicula} = require("../controllers/admin.controller");


// importar controladores

// importar middlewares


// Ruta crear pelicula

router.post('/createMovie', /* valicacion , */anadirPelicula)

//Ruta editar película

router.put('/editMovie/:id',/* valicacion , */editarPelicula)

//Ruta eliminar pelicula

router.delete('/removeMovie/:id',/* valicacion , */borrarPelicula)



module.exports = router;