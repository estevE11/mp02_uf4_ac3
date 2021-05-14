const express = require('express');
const router = express.Router();

const SuperheroeModel = require('./../models/SuperheroeModel');

router.get('/', (req, res) => {
    SuperheroeModel.find({}, (err, data) => {
        if (err) {
            res.send({ error: err });
            return;
        }
        res.send(data);
    });
});

router.get('/:id', (req, res) => {
    SuperheroeModel.findById(req.query.id, (err, data) => {
        if (err || !data) {
            res.send({ error: err });
            return;
        }
        res.send(data);
    });
});

router.post('/', (req, res) => {
    const superheroe = new SuperheroeModel(req.body);
    superheroe.save((err, data) => {
        if (err) {
            res.send({error: err});
            return;
        }
        res.send({id: data._id});
    });
});

module.exports = router;