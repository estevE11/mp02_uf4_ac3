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
    SuperheroeModel.findById(req.params.id, (err, data) => {
        if (err || !data) {
            res.send({ error: err });
            return;
        }
        res.send(data);
    });
});

router.get('/search/:text', (req, res) => {
    SuperheroeModel.find({ name: { $regex: `.*${req.params.text}.*` } }, (err, data) => {
        if (err || !data) {
            res.send({ error: err });
            return;
        }
        res.send(data);
    });
});

router.get('/sort/:property', (req, res) => {
    SuperheroeModel.find({}).sort(req.params.property).exec((err, data) => {
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