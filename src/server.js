const express = require('express');
const cors = require('cors');

const app = express();

const { getBaseConversion } = require('../../base-converter/controllers/base-converter.controllers');
const { getSummation } = require('../../base-converter/controllers/summation-calculator.controllers');
const { handle404s, handleCustomErrors, handleServerErrors } = require('./errors');
const { getSortedListUsingBubbleSort } = require('./controllers/getSortedListUsingBubbleSort');

app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// app.options('*', (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Authorization, Content-Length, X-Requested-With');
//     res.send(200);
// });

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.send({ msg: 'Hello from the server!' });
});

app.post('/base-converter', getBaseConversion);
app.post('/summation-calculator', getSummation);
app.post('/sorting-algorithms/bubble-sort', getSortedListUsingBubbleSort);

app.all('*', handle404s);

app.use(handleCustomErrors);
app.use(handle404s);
app.use(handleServerErrors);

module.exports = app;
