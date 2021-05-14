const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v.length <= 20;
            },
            message: 'El nombre tiene que tener una longitud menor a 20'
        }
    },
    gender: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return v == 'Masculino' || v == 'Femenino';
            },
            message: 'El genero debe ser "Masculino" o "Femenino"'
        }
    },
    race: {
        type: String,
        required: false
    },
    height: {
        type: Number,
        required: true,
        min: 0
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    },
    birthpalce: {
        type: Date,
        required: false
    },
    inteligence: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    strength: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    speed: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    power: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    combat: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
});

module.exports = mongoose.model('superherois', schema);