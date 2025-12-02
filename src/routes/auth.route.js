const express = require("express")
const router = express.Router()

const {createUser, loginUser, renewToken} = require("../controllers/auth.controller")
const {validarJWT} = require("../middlewares/validarJWT")
const {validarRol} = require("../middlewares/roles.middleware")

//REGISTER
router.post('/signup', /* [validacion] ,*/ createUser)

//LOGIN
router.post('/login', /* [validacion] ,*/ loginUser)

//RENEWTOKEN
router.post('/renew', [validarJWT/* , validarRol(["admin", "user"]) */] , renewToken)



module.exports=router;