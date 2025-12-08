const express = require("express");
const router = express.Router();
const { getTodasLasPelis, getPeliculaPorID, anadirPelicula, editarPelicula, borrarPelicula} = require("../controllers/admin.controller");
const {validarJWT} = require("../middlewares/validarJWT")
const {check} = require("express-validator");
const{validateInputs}= require("../middlewares/validateInputs");
const {validarRol} = require("../middlewares/roles.middleware")

const {upload} = require("../middlewares/upload");



// Ruta inicio (donde están todas las peliculas del admin)
router.get('/dashboard',[validarJWT, validarRol([2])], getTodasLasPelis)
router.get('/dashboard/:id',[validarJWT, validarRol([2])], getPeliculaPorID)

// Ruta crear pelicula
router.post('/createMovie', [
        upload.single("imagen"),validarJWT, validarRol([2]),
    // Título
    check("titulo")
        .notEmpty().withMessage("Debes escribir el título")
        .isLength({ min: 1, max: 150 }).withMessage("El título no tiene la longitud correcta"),
    // Año (como INT)
    check("anio")
        .notEmpty().withMessage("Debes añadir el año")
        .isInt({ min: 1888, max: new Date().getFullYear() + 3 }).withMessage("El año no es válido"),
    // Director 
check("director")
        .notEmpty().withMessage("Debes escribir el nombre del director")
        .isLength({ min: 1, max: 150 }).withMessage("El director tiene un nombre muy largo para ser verdad"),
    // Género 
    check("genero")
        .notEmpty().withMessage("Debes escribir el género")
        .isLength({ min: 1, max: 150}).withMessage("El genero tiene un nombre muy largo para ser verdad"),
    // Duración
    check("duracion_en_min")
        .notEmpty().withMessage("Debes escribir la duración en minutos")
        .isInt({ min: 1, max: 600 }).withMessage("La duración no es válida"),
    // Sinopsis
    check("sinopsis")
        .notEmpty().withMessage("Debes escribir la sinopsis")
        .isLength({ max: 600 }).withMessage("La sinopsis no puede superar los 600 caracteres"),
    validateInputs,
], anadirPelicula)

//Ruta editar película
router.post('/editMovie/:id',[   
    validarJWT,
    validarRol([2]),
    upload.single("imagen"),
    // Título
    check("titulo")
        .notEmpty().withMessage("Debes escribir el título")
        .isLength({ min: 1, max: 150 }).withMessage("El título no tiene la longitud correcta"),
    // Año (como INT)
    check("anio")
        .notEmpty().withMessage("Debes añadir el año")
        .isInt({ min: 1888, max: new Date().getFullYear() + 3 }).withMessage("El año no es válido"),
    // Director ID
    check("director")
        .notEmpty().withMessage("Debes escribir el id del director")
        .isInt().withMessage("El id del director debe ser numérico"),
    // Género ID
    check("genero")
        .notEmpty().withMessage("Debes escribir el id del género")
        .isInt().withMessage("El id del género debe ser numérico"),
    // Duración
    check("duracion_en_min")
        .notEmpty().withMessage("Debes escribir la duración en minutos")
        .isInt({ min: 1, max: 600 }).withMessage("La duración no es válida"),
    // Sinopsis
    check("sinopsis")
        .notEmpty().withMessage("Debes escribir la sinopsis")
        .isLength({ max: 600 }).withMessage("La sinopsis no puede superar los 600 caracteres"),
    validateInputs
], editarPelicula)

//Ruta borrar película
router.delete('/removeMovie/:id', [validarJWT, validarRol([2])], borrarPelicula)

module.exports = router;