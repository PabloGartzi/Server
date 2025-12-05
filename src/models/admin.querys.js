const adminQuerys = {
    getDate: `SELECT NOW()`, 
    getAllFilms: `SELECT * FROM peliculas`,
    getFilmByID: `SELECT * FROM peliculas WHERE id_peliculas = $1`,
    addFilm: `INSERT INTO peliculas (titulo, imagen_url, anio, director, genero, duracion_en_min, sinopsis) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
    editMovie: `UPDATE peliculas SET 
    titulo = COALESCE($2, titulo),
    imagen_url = COALESCE($3, imagen_url),
    anio = COALESCE($4, anio),
    director = COALESCE($5, director),
    genero = COALESCE($6, genero),
    duracion_en_min = COALESCE($7, duracion_en_min),
    sinopsis = COALESCE($8, sinopsis)
    WHERE id_peliculas = $1
    RETURNING *;`,
    deleteMovie: `DELETE FROM peliculas WHERE id_peliculas = $1 RETURNING *;`,
    findOne: `SELECT * FROM peliculas WHERE titulo = $1`,
}

module.exports = {
    adminQuerys
}