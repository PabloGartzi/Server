const userQuerys = {

    getFilmByTitulo: `SELECT * FROM peliculas WHERE LOWER(titulo) LIKE '%' || LOWER(TRIM($1)) || '%'`,
    getFilmFavoritos: `SELECT * FROM peliculas 
    INNER JOIN favoritos ON peliculas.id_peliculas = favoritos.id_peliculas
    WHERE favoritos.id_usuario = $1`,
    deleteFavorite: `DELETE FROM favoritos WHERE id_usuario = $1 AND id_peliculas = $2 RETURNING *;`,
    saveFavouriteFilm: `INSERT INTO favoritos (id_peliculas, id_usuario) VALUES ($1, $2) RETURNING *;`,
    existeEnFavoritos: `SELECT * FROM favoritos WHERE id_peliculas = $1 AND id_usuario = $2`
}


module.exports = {
    userQuerys
}