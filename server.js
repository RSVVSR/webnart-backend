
require('dotenv').config({ path: './config/dev.env' })

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = new express();
const port = process.env.PORT;

const corsOption = {
    origin: '*',
    optionSuccessStatus: 200,
}

app.set('view engine', 'ejs');
app.use(express.static('uploads'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(express.json());
app.use(cors(corsOption));


app.get('/', (req, res) => {
    res.status(200).send("Welcome to Webnart-Endpoints where every APi see you -_- ");
});

app.listen(port, console.log("server is started"));

