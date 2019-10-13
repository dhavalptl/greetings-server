'use strict';

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const PORT = 4000;

const app = express();
app.use(helmet());
app.use(compression());
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.sendStatus(404);
});

app.get('/greetings', (request, response) => {
    response.send(`Hello world from server -- ${new Date()}`);
});

app.listen(PORT, (error) => {
    if(error) {
        console.error("Error while creating server ", error);
    }
    console.log(`Server started at port ${PORT}`);
});