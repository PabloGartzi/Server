const express = require("express");
const router = express.Router();
const {validarJWT} = require("../middlewares/validarJWT")

const {
    buscarPelicula,
    getTodoLosFavoritos,
    guardarFavorito,
    borrarFavorito,
 } = require("../controllers/user.controller");


// router.get('/',/* validaciones ,*/ getTodasLasPelis);
// router.get('/dashboard',/* validaciones ,*/dashboard)
router.get('/search', [validarJWT]/* validaciones ,*/, buscarPelicula)
router.post('/añadirFavoritos',[validarJWT] /* validaciones ,*/, guardarFavorito)
router.get('/favoritos', [validarJWT]/* [validaciones] */, getTodoLosFavoritos)
router.delete('/deleteFavorito',[validarJWT]/* validaciones ,*/, borrarFavorito)


module.exports = router 