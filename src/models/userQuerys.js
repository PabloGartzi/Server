const userQuerys = {

    getFilmByTitulo: 'SELECT*FROM films WHERE titule =$1',
    getFilmFavoritos: 'SELECT*FROM favoritos',
    deleteFavourite: `DELETE FROM films WHERE id = $1 RETURNING *;`,
    saveFavouriteFilm: `INSERT INTO favoritos(titulo, imagen, año, director, genero, duracion) VALUES($1,$2,$3,$4,$5,$6) RETURNING *;`
}


module.exports = {
    userQuerys
}