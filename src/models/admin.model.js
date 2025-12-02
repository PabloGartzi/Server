const {connection} = require('../config/dbConnect') 
const {adminQuerys} = require("./admin.querys");

const getAllFilms = async () => {
  let client, result
  try {
    client = await connection();
    result = await client.query(adminQuerys.getAllFilms)
    return result.rows;
  } catch (error) {
    console.log(error, "<===========================>")
    return error;
  } finally{
    await client.end()
    console.log("<==============CIERRE DE CONEXIÓN=============>")
  }
}

const getFilmByID = async (id) => {
  let client, result
  try {
    client = await connection();
    result = await client.query(adminQuerys.getFilmByID, [id])
    return result.rows;
  } catch (error) {
    console.log(error, "<===========================>")
    return error;
  } finally{
    await client.end()
    console.log("<==============FINAL=============>")
  }
}

const addFilm = async (filmData) => {
  const {titulo, imagen, año, director, genero, duracion} = filmData;
  let client, result;
  try {
    client = await connection();
    result = await client.query(adminQuerys.addFilm, [titulo, imagen, año, director, genero, duracion]);
    
    return result.rows;
  } catch (error) {
    console.log("Error al agregar película:", error);
    return error;
  } finally {
    await client.end();
  }
};

const editMovie = async (id, filmData) => {
  const {titulo, imagen, año, director, genero, duracion} = filmData;
  let client, result;
  try {
    client = await connection();
    result = await client.query(adminQuerys.editMovie, [id, titulo, imagen, año, director, genero, duracion]
    );
    return result.rows[0]; // Devolvemos un solo objeto
  } catch (error) {
    console.log("Error al editar película:", error);
    return error;
  } finally {
    await client.end();
  }
};

const deleteMovie = async (id) => {
  let client, result;
  try {
    client = await connection();
    result = await client.query(adminQuerys.deleteMovie, [id]
    );
    return result.rows[0]; // Devolvemos un solo objeto
  } catch (error) {
    console.log("Error al editar película:", error);
    return error;
  } finally {
    await client.end();
  }
};


module.exports= {
    getAllFilms,
    getFilmByID,
    addFilm,
    editMovie,
    deleteMovie
}