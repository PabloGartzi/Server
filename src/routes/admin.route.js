const express = require("express");
const router = express.Router();

// importar controladores

// importar middlewares


// Ruta crear pelicula

router.post('/createMovie', /* valicacion , */createMovie)

//Ruta editar película

router.put('/editMovie',/* valicacion , */editMovie)

//Ruta eliminar pelicula

router.delete('/removeMovie',/* valicacion , */deleteMovie)



module.exports = router;