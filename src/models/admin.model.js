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
    result = await client.query(adminQuerys.addFilm,[titulo, imagen, año, director, genero, duracion]);
    
    return result.rows;
  } catch (error) {
    console.log("Error al agregar película:", error);
    return error;
  } finally {
    await client.end();
  }
};


module.exports= {
    getAllFilms,
    getFilmByID,
    addFilm
}