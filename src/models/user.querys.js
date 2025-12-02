const userQuerys = {

    getFilmByTitulo: 'SELECT * FROM peliculas WHERE titulo = $1',
    getFilmFavoritos: `SELECT * FROM peliculas 
    INNER JOIN favoritos ON peliculas.id_peliculas = favoritos.id_peliculas
    WHERE favoritos.id_usuario = $1`,
    deleteFavorite: `DELETE FROM favoritos WHERE id_usuario = $1 AND id_peliculas = $2 RETURNING *;`,
    saveFavouriteFilm: `INSERT INTO favoritos (_idusuario, id_peliculas) VALUES ($1,$2) RETURNING *;`
}


module.exports = {
    userQuerys
}