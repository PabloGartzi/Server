const {getAllFilms, getFilmByID, addFilm, editMovie, deleteMovie} = require("../models/admin.model")

const getTodasLasPelis = async (req, res) => {
    try {
        const data = await getAllFilms()
        console.log("<================ LAS PELICULAS QUE HAY SON: ================>", data)
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

const getPeliculaPorID = async (req, res) => {
    const id = req.params.id
    try {
        const data = await getFilmByID(id)
        console.log(data)
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
const anadirPelicula = async (req, res) => {
    const body = req.body
    try {
        const data = await addFilm(body)
        console.log("Pelicula agregada:", data);
        return res.status(201).json({
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

const editarPelicula = async (req, res) => {
    const id = req.params.id
    const modificacion = req.body
    try {
        const nuevaPeli = await editMovie(id, modificacion)
        if (nuevaPeli) {
            return res.status(200).json({
                ok:true,
                msg: "Pelicula actualizada",
                nuevaPeli
            })
        } else {
            return res.status(404).json({
                ok:false,
                msg: "ERROR 404, pelicula no encontrada",
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Error, contacte con el administrador',
        })
    }
}

const borrarPelicula = async (req, res) => {
    const id = req.params.id
    try {
        const peliBorrada = await deleteMovie(id)
        if (peliBorrada) {
            return res.status(200).json({
                ok:true,
                msg: "Pelicula borrada",
                peliBorrada
            })
        } else {
            return res.status(404).json({
                ok:false,
                msg: "ERROR 404, pelicula no encontrada",
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok:false,
            msg:'Error, contacte con el administrador',
        })
    }
}

module.exports= {
    getTodasLasPelis, 
    getPeliculaPorID, 
    anadirPelicula,
    editarPelicula,
    borrarPelicula
}