//configuracion globa
require('./config/config');

//importaciones
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
var colors = require('colors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//habilitar la carpeta public para el acceso remoto
app.use(express.static(path.resolve(__dirname, '../public')));

//configuracion global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE'.yellow);
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`.yellow);
})