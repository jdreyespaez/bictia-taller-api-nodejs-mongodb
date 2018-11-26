const express = require('express')
const router = express.Router()
const Persona = require('../modelos/personasModelo')

// AGREGAR
router.post('/personas', function(req, res, next){
    Persona.create(req.body).then(function(persona){
        res.send(persona)
    }).catch(next)
})

// CONSULTAR
router.get('/personas', function(req,res,next){
    Persona.find({nota: {$gte : 4}}).then(function(personas){
        res.send(personas)
    }).catch(next)
})

// ACTUALIZAR
router.put('/personas/:id', function(req,res,next){
    Persona.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
        Persona.findOne({_id : req.params.id}.then(function(persona){
            res.send(persona)
        }))
    }).catch(next)
})

// ELIMINAR
router.delete('/personas/:id', function(req,res,next){
    Persona.findOneAndRemove({_id : req.params.id}).then(function(persona){
        res.send(persona)
    }).catch(next)
})

// éste es que el estamos llamando desde conexion.js
module.exports = router