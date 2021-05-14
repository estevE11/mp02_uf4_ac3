const express = require('express');
const router = express.Router();

const SuperheroeModel = require('./../models/SuperheroeModel');

router.get('/', (req, res) => {
    res.send({message: 'callaputa'});
});

router.post('/', (req, res) => {
    res.send({message: 'callaputa'});
});

module.exports = router;