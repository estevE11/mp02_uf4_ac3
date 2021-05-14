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

router.put('/:id', (req, res) => {
    SuperheroeModel.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) return res.send({ error: err });
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

router.get('/vs/:id0/:id1', (req, res) => {
    SuperheroeModel.find({_id: req.params.id0}, (err, data0) => {
        if (err || !data0) {
            res.send({ error: err });
            return;
        }
        SuperheroeModel.find({ _id: req.params.id0 }, (err, data1) => {
            if (err || !data1) {
                res.send({ error: err });
                return;
            }
            const avg0 = calcAverage(data0);
            const avg1 = calcAverage(data1);
            if (avg0 > avg1) {
                res.send(data0);
            } else {
                res.send(data1);
            }
        });
        //res.send(data);
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

const calcAverage = (data) => {
    let sum = 0;
    sum += data.inteligence;
    sum += data.strenght;
    sum += data.power;
    sum += data.combat;
    sum += data.resistance;
    sum += data.speed;
    return sum / 6;
}

module.exports = router;