const { deleteFavorite, getAllFavourite, getFilmByTitulo, saveFavourite, existeEnFavoritos, getFilmByID} = require('../models/user.model')


// Controllers de usuario

const buscarPelicula = async (req, res) => {
    const body = req.query
    try {
        const data = await getFilmByTitulo(body)
        console.log("<================ LA PELICULA BUSCADA: ================>", data)
        return res.status(200).json({
            ok: true,
            msg: "TODO OK",
            data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Error al buscar la película"
        })
    }
}

const getTodoLosFavoritos = async (req, res) => {
    try {
        const id_usuario = req.userToken.uid;
        const data = await getAllFavourite(id_usuario)
        console.log("<================ LAS PELICULAS QUE HAY EN FAVORITOS SON: ================>", data)
        return res.status(200).json({
            ok: true,
            msg: "TODO OK",
            data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "ERROR EN LA BUSQUEDA DE FAVORITOS"
        })
    }
}

const guardarFavorito = async (req,res) => {
    const body = req.body
    try {
        const id_usuario = req.userToken.uid;
        const existeEnFav = await existeEnFavoritos(body, id_usuario)
        if(existeEnFav){
            return res.status(400).json({
                ok: false,
                msg: "Ya existe esa pelicula en favoritos",
            })
        }
        const data = await saveFavourite(body, id_usuario)
        console.log("<================ LA PELICULA GUARDADA EN FAVORITOS: ================>", data)
        return res.status(200).json({
            ok: true,
            msg: "TODO OK",
            data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Error al guaradar en favoritos"
        })
    }
}

const borrarFavorito = async (req, res) => {
    const body = req.body
    try {
        const id_usuario = req.userToken.uid
        const existeEnFav = await existeEnFavoritos(body, id_usuario)
        if(!existeEnFav){
            return res.status(400).json({
                ok: false,
                msg: "No puedes borrarlo porque no existe",
            })
        }
        const data = await deleteFavorite(body, id_usuario)
        console.log("<================ EL FAVORITO A ELIMINAR ES: ================>", data)
        return res.status(200).json({
            ok: true,
            msg: 'TODO OK',
            data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "Error al eliminar favorito"
        })
    }
}

const getPeliculaPorID = async (req, res) => {
    const id = req.params.id
    try {
        const data = await getFilmByID(id)
        return res.status(200).json({
            ok: true,
            msg: "TODO OK",
            data
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: "TODO MAL, CONTACTA CON EL ADMIN"
        })
    }
}

module.exports = {
    getTodoLosFavoritos,
    borrarFavorito,
    buscarPelicula,
    guardarFavorito,
    getPeliculaPorID
}