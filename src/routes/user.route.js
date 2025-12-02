const express = require("express");
const router = express.Router();
const { getTodasLasPelis, 
    getPeliculaPorID,
    anadirPelicula,
    borrarPelicula,
    editarPelicula,
    buscarPelicula,
    getTodoLosFavoritos,
    guardarFavorito,
    borrarFavorito,
 } = require("../controllers/admin.controller");

// importar middlewares

//post 
router.post('/singup',/* validaciones ,*/ registerUser)
router.post('/login',/* validaciones ,*/loginUsuario)
router.post('/logout',/* validaciones ,*/logout)


//get
router.get('/',/* validaciones ,*/ getTodasLasPelis);
router.get('/dashboard',/* validaciones ,*/dashboard)
router.get('/search/:title',/* validaciones ,*/buscarPelicula)


// recuperar contraseña
// router.get('/recoverpassword', validaciones , recoverPassword)

// cambiar contraseña
// router.put('/restorepassword', validaciones , changePassword)


router.get('/añadirFavoritos',/* validaciones ,*/guardarFavorito)
router.get('/favoritos',/* [validaciones] */getTodoLosFavoritos)
router.delete('/deleteFavorito',/* validaciones ,*/borrarFavorito)


module.exports = router 