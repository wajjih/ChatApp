const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const User = require('./models/User')

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const app = express();

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/register', (req,res) => {

});

app.listen(4000)

