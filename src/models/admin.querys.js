const adminQuerys = {
    getDate: `SELECT NOW()`, 
    getAllFilms: `SELECT * FROM Films`,
    getFilmByID: `SELECT * FROM Films WHERE id = $1`
}

module.exports = {
    adminQuerys
}