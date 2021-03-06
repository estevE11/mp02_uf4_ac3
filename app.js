const express = require('express');
const app = express();
const mongoose = require('mongoose');

const DB_URI = `mongodb://localhost:27017/act3`;

mongoose.connect(DB_URI, { useNewUrlParser: true });

const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded());

app.use('/superheroes', require('./routes/superheroes'));

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});