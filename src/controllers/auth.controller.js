const bcrypt = require("bcryptjs");

const {findOne, anadir_usuario} = require("../models/auth.model")
const {JWTGenerator} = require("../helpers/jwt")

const createUser = async (req, res) => {
    try {
        const {nombre, email, contrasenia} = req.body
        //console.log(name, email, password)
        const existe = await findOne(email);
        //console.log(existe)
        if(existe){
            return res.status(401).json({
                ok:false,
                msg: "Usuario existente"
            })
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(contrasenia, salt);
        const id_rol = 2 // En la query
        const savedUser = await anadir_usuario(nombre, email, hashedPassword, id_rol)
        console.log(savedUser)
        const payload ={
            uid: savedUser.id_usuario,
            rol: savedUser.id_rol
        }
        console.log(payload)
        const token = await JWTGenerator(payload)
        return res.status(200).json({
            ok:true,
            msg: "REGISTRANDO.............",
            token
        })

    } catch (error) {
        console.log(error)

        return res.status(500).json({
            ok:false,
            msg: "Contacte con el administrador"
        })
    }
}

/*
 * TODO: 
 *  1.  Recoger el email y password del req.body
 *  2.  Comprobar si no existe un usuario con ese email
 *  3.  Comparar que las contraseñas coinciden
 *  4.  Generar el token
 */
const loginUser = async (req, res) => {
    try {
        const {email, contrasenia} = req.body
        const usuario = await findOne(email);
        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg: "No hay usuario con ese email"
            })
        }
        const passwordOk = bcrypt.compareSync(contrasenia, usuario.contrasenia)
        if(!passwordOk){
            return res.status(401).json({
                ok:false,
                msg: "La contraseña no es válida"
            })
        }
        //console.log(usuario, "Usuario correcto--Llega hasta aqui")
        const payload ={
            uid: usuario.id_usuario,
            rol: usuario.id_rol
        }
        console.log(payload)
        const token = await JWTGenerator(payload)
        return res.status(200).json({
            ok:true,
            msg: "Login de usuario",
            usuario,
            token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg: "Contacte con el administrador"
        })
    }
}

const renewToken = async (req, res) => {
    const {uid, rol} = req.userToken;
    //console.log(uid, rol)

    const token = await JWTGenerator({uid, rol})
    return res.status(200).json({
        ok:true,
        msg: "Renew de usuario",
        usuario: {
            uid,
            rol
        },
        token
    })
} 

module.exports={
    createUser,
    loginUser,
    renewToken
}