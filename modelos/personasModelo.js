const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Debe llenar el campo nombre']
    },

    edad: {
        type: Number
    },

    instituto: {
        type: String,
    },

    cargo: {
        type: String,
    },

    nota: {
        type: Number,
        required: [true, 'Debe llenar el campo nota']
    }
})

const Persona = mongoose.model('persona', PersonaSchema)

module.exports = Persona