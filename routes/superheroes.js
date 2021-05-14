const express = require('express');
const router = express.Router();

const SuperheroeModel = require('./../models/SuperheroeModel');

router.get('/', (req, res) => {
    res.send({message: 'callaputa'});
});

router.post('/', (req, res) => {
    const superheroe = new SuperheroeModel(req.body);
    superheroe.save((err, doc) => {
        if (err) {
            res.send({error: err});
            return;
        }
        res.send({id: doc._id});
    });
});

module.exports = router;