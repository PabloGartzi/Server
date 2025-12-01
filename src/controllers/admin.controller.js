const {getAllFilms, getFilmByID, addFilm} = require("../models/admin.model")

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

module.exports= {
    getTodasLasPelis, 
    getPeliculaPorID, 
    anadirPelicula
}