// Llamamos a todas la librerías
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// Agregamos el manejador de rutas
const routes = require('../rutas/personasRutas')

const app = express()
const config = require('./db')
const PORT = 4000;

// CONEXIÓN A LA BD 
mongoose.connect(config.DB, {useNewUrlParser: true}). then(
    () => {console.log(`Conexión Exitosa :'D`)},
    // Este salto de línea se ve en la consola
    error => {console.log(`Error en la conexión:
                            ${error}`)
});

app.use(bodyParser.json())
app.use('/api', routes)

// MIDDLEWARE
app.use(function(err, req, res, next){
    res.status(422),send({error: err.message})
})


// Conexión a puerto
app.listen(PORT, function(){
    console.log(`Corriendo en el Puerto: ${PORT}`);
})