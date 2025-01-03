require('dotenv').config({ path: './config/dev.env' })

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = new express();
const port = process.env.PORT;

const userRoute = require('./routes/user/userRoute');
const authRoute = require('./routes/user/AuthRoute');
const artRoute = require('./routes/art/artRoutes');


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

app.use('/api/v1/user', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/art', artRoute);


app.get('/', (req, res) => {
    res.status(200).send("Welcome to Webnart-Endpoints where every APi see you -_- ");
});

app.listen(port, console.log("server is started"));
