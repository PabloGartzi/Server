const express = require("express");
const router = express.Router();

// importar controladores

// importar middlewares

//post 
router.post('/singup',/* validaciones ,*/ registerUser)
router.post('/login',/* validaciones ,*/loginUsuario)
router.post('/logout',/* validaciones ,*/logout)


//get
router.get('/',/* validaciones ,*/ home);
router.get('/dashboard',/* validaciones ,*/dashboard)
router.get('/search/:title',/* validaciones ,*/searchMovie)
router.get('/search',/* validaciones ,*/search)

// recuperar contraseña
// router.get('/recoverpassword', validaciones , recoverPassword)

// cambiar contraseña
// router.put('/restorepassword', validaciones , changePassword)

//guardar en favoritos
router.get('/favoritas',/* validaciones ,*/saveFavourites)

//eliminar favoritos
router.delete('/deleteFavorito',/* validaciones ,*/deleteFavourites)


module.exports = router 