const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genere: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: false
    },
    height: {
        type: String,
        required: true,
        min: 0
    },
    weight: {
        type: String,
        required: true,
        min: 0
    },
    birthpalce: {
        type: String,
        required: false
    },
    inteligence: {
        type: String,
        required: true,
        min: 0,
        max: 100
    },
    force: {
        type: String,
        required: true,
        min: 0,
        max: 100
    },
    speed: {
        type: String,
        required: true,
        min: 0,
        max: 100
    },
    power: {
        type: String,
        required: true,
        min: 0,
        max: 100
    },
    combat: {
        type: String,
        required: true,
        min: 0,
        max: 100
    },
});

Schema.path('name').validate(function (v) {
    return v.length <= 20;
}, 'El nombre tiene que tener una longitud menor a 20');

Schema.path('genere').validate(function (v) {
    return v == 'Masculino' || v == 'Femenino';
}, 'El genero debe ser "Masculino" o "Femenino"');


module.exports = mongoose.model('superherois', schema);