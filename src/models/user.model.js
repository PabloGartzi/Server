const {connection}=require('../config/dbConnect')
const {userQuerys}=require('./userQuerys')

const getFilmByTitule= async (titulo)=>{
    let client, result
    try {
        client= await connection();
        result= await client.query(userQuerys.getFilmByTitule,[titulo])
        return result.rows;
        
    } catch (error) {
        console.log(error,"<===========================>")
        return error;
        
    }
    finally{
        await client.end();
    }
}

const getAllFavourite=async()=>{
    let client, result;
    try {
    client= await connection();
    result= await client.query(userQuerys.getFilmFavoritos)
    return result.rows;

        
    } catch (error) {
        cosole.log("<===========================>",error)
        return error
        
    }
    finally{
        await client.end()
        console.log("<==============FINAL=============>")
    }

}
const deleteFavourite = async (id) => {
  let client, result;
  try {
    client = await connection();
    result = await client.query(adminQuerys.deleteFavorite, [id]
    );
    return result.rows;
  } catch (error) {
    console.log("Error al eliminar favoritos", error);
    return error;
  } finally {
    await client.end();
  }
};

const saveFavourite = async (pelicula) => {
    const { titulo, imagen, año, director, genero, duracion } = pelicula
    let client, result
    try {
        client = await connection();
        result = await client.query(userQuerys.saveFavouriteFilm, [titulo, imagen, año, director, genero, duracion]);
        return result.rows
    } catch (error) {
        console.log(error, "<===========================>")
        return error
    } finally {
        await client.end();
    } 
}

module.exports={
    getFilmByTitule,
    getAllFavourite,
    deleteFavourite,
    saveFavourite
}