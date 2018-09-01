//configuracion globa
require('./config/config');

//importaciones
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
var colors = require('colors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//configuracion global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE'.green);
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${process.env.PORT}`.red);
})