const adminQuerys = {
    getDate: `SELECT NOW()`, 
    getAllFilms: `SELECT * FROM films`,
    getFilmByID: `SELECT * FROM films WHERE id = $1`,
    addFilm: `INSERT INTO films (titulo, imagen, año, director, genero, duracion) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    editMovie: `UPDATE films 
    SET titulo = COALESCE($2, titulo), 
    imagen = COALESCE($3, imagen), 
    año = COALESCE($4, año), 
    director = COALESCE($5, director), 
    genero = COALESCE($6, genero),
    duracion = COALESCE($7, duracion) 
    WHERE id = $1 RETURNING *;`,
    deleteMovie: `DELETE FROM films WHERE id = $1 RETURNING *;`,
}

module.exports = {
    adminQuerys
}