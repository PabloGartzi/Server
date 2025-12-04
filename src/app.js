const express = require("express"); //USAMOS EXPRESS PARA LA CONEXIÓN CON EL SERVIDOR
require('dotenv').config() //MANEJO DE VARIABLES DE ENTORNO
var cors = require("cors");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');




const app = express()
const port = process.env.PORT;

cors({
  origin:["http://www.render.com"]
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//TEMPLATES

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded())

app.use(express.static(__dirname + '/public'))

//RUTAS
app.use('/admin', require('./routes/admin.route'));
app.use('/user',require('./routes/user.route'));
app.use('/',require('./routes/auth.route'));



//LISTENER
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});

