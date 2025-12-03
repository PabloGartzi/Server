const express = require("express");
const router = express.Router();
const {validarJWT} = require("../middlewares/validarJWT")
const {check} = require("express-validator");
const{validateInputs}= require("../middlewares/validateInputs");
const {validarRol} = require("../middlewares/roles.middleware")

const {
    buscarPelicula,
    getTodoLosFavoritos,
    guardarFavorito,
    borrarFavorito,
 } = require("../controllers/user.controller");


// router.get('/',/* validaciones ,*/ getTodasLasPelis);
// router.get('/dashboard',/* validaciones ,*/dashboard)
router.get('/search', [validarJWT, validarRol([1]), check("titulo")
        .not().isEmpty().withMessage("Debes escribir el título")
        .isLength({min:1, max:150}).withMessage("El título no tiene la longitud correcta"),
    validateInputs], buscarPelicula)

router.post('/anadirFavoritos',[validarJWT, validarRol([1])], guardarFavorito)
router.get('/favoritos', [validarJWT, validarRol([1])], getTodoLosFavoritos)
router.delete('/deleteFavorito',[validarJWT, validarRol([1])], borrarFavorito)


module.exports = router