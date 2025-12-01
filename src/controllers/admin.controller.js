const {getAllFilms, getFilmByID} = require("../models/admin.model")

const getTodasLasPelis = async (req, res) => {
    try {
        const data = await getAllFilms()
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

const getFilmByID = async (req, res) => {
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


module.exports= {
    getTodasLasPelis,
}