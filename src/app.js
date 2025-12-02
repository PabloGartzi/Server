const express = require("express"); //USAMOS EXPRESS PARA LA CONEXIÓN CON EL SERVIDOR
require('dotenv').config() //MANEJO DE VARIABLES DE ENTORNO
var cors = require("cors");


const app = express()
const port = process.env.PORT;

cors({
  origin:["http://www.render.com"]
})


//BBDD

// connection()
//   .then((resp) => console.log('Conectado a la base de datos de pg'))
//   .catch((error) => console.log(error))

//TEMPLATES

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded())


//RUTAS
app.use('/admin', require('./routes/admin.route'));


//LISTENER
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

