const adminQuerys = {
    getDate: `SELECT NOW()`, 
    getAllFilms: `SELECT * FROM films`,
    getFilmByID: `SELECT * FROM films WHERE id = $1`,
    addFilm: `INSERT INTO films (titulo, imagen, año, director, genero, duracion) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`
}

module.exports = {
    adminQuerys
}