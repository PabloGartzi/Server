const express = require("express"); //USAMOS EXPRESS PARA LA CONEXIÓN CON EL SERVIDOR
require('dotenv').config() //MANEJO DE VARIABLES DE ENTORNO
var cors = require("cors");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');




const app = express()
const port = process.env.PORT;

var whitelist = ["https://server-yo1g.onrender.com", `http://localhost:${process.env.PORT}`]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

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

