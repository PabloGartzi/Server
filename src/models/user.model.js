const {connection}=require('../config/dbConnect')
const {userQuerys}=require('./user.querys')

const getFilmByTitulo = async (body)=>{
    let {titulo} = body;
    let client, result
    try {
        client= await connection();
        result= await client.query(userQuerys.getFilmByTitulo,[titulo])
        return result.rows;
    } catch (error) {
        console.log(error,"<===========================>")
        return error;
    }
    finally{
        await client.end();
    }
}

const getAllFavourite=async(id_usuario)=>{
    let client, result;
    try {
    client= await connection();
    result= await client.query(userQuerys.getFilmFavoritos, [id_usuario])
    return result.rows;
    } catch (error) {
        console.log("<===========================>",error)
        return error
    }
    finally{
        await client.end()
        console.log("<==============FINAL=============>")
    }
}

const deleteFavorite = async (body, id_usuario) => {
    const {id_peliculas} = body
    let client, result;
    try {
        client = await connection();
        result = await client.query(userQuerys.deleteFavorite, [id_usuario, id_peliculas]);
        return result.rows;
    } catch (error) {
        console.log("Error al eliminar favoritos", error);
        return error;
    } finally {
        await client.end();
    }
};

const saveFavourite = async (body, id_usuario) => {
    const {id_peliculas} = body;
    let client, result
    try {
        client = await connection();
        result = await client.query(userQuerys.saveFavouriteFilm, [id_peliculas, id_usuario]);
        return result.rows
    } catch (error) {
        console.log(error, "<===========================>")
        return error
    } finally {
        await client.end();
    } 
}

const existeEnFavoritos = async (body, id_usuario) => {
    const {id_peliculas} = body;
    let client, result
    try {
        client = await connection();
        result = await client.query(userQuerys.existeEnFavoritos, [id_peliculas, id_usuario])
        return result.rows[0];
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
    result = await client.query(userQuerys.getFilmByID, [id])
    return result.rows[0];
  } catch (error) {
    console.log(error, "<===========================>")
    return error;
  } finally{
    await client.end()
    console.log("<==============FINAL=============>")
  }
}

module.exports={
    getFilmByTitulo,
    getAllFavourite,
    deleteFavorite,
    saveFavourite,
    existeEnFavoritos,
    getFilmByID
}