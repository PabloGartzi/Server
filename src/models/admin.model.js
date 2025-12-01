const {adminQuerys} = require("./models/admin.querys");

const getAllFilms = async () => {
  let client, result
  try {
    client = await connection();
    result = await client.query(adminQuerys.getAllFilms)
    console.log("data", result.rows[0])
  } catch (error) {
    console.log(error, "<===========================>")
    return error;
  } finally{
    await client.end()
    console.log("<==============FINAL=============>")
  }
}

const getFilmByID = async (id) => {
  let client, result
  try {
    client = await connection();
    result = await client.query(adminQuerys.getFilmByID, [id])
    console.log("data", result.rows[0])
  } catch (error) {
    console.log(error, "<===========================>")
    return error;
  } finally{
    await client.end()
    console.log("<==============FINAL=============>")
  }
}

module.exports= {
    getAllFilms,
    getFilmByID
}