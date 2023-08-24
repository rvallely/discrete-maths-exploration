const express = require('express');
const cors = require('cors');

const app = express();

const { getSummation } = require('./controllers/getSummation/summationCalculator');
const { handle404s, handleCustomErrors, handleServerErrors } = require('./errors');
const {
    getBaseConversion,
} = require('./controllers');
const { CORS_ORIGIN } = require('./env');
const { getSortedList } = require('./controllers/getSortedList');

app.use(cors({
    origin: CORS_ORIGIN,
}))
    .use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        next();
    })
    .use(express.json())
    .use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.send({ msg: 'Hello from the server!' });
});

app.post('/base-converter', getBaseConversion);
app.post('/summation-calculator', getSummation);

[
    'bubble-sort',
    'bubble-sort-faster',
    'merge-sort',
    'quick-sort',
    'insertion-sort',
    'selection-sort',
].forEach((sortingAlgorithm) => {
    app.post(`/sorting-algorithms/${sortingAlgorithm}`, getSortedList);
});

app.all('*', handle404s);

app.use(handleCustomErrors)
    .use(handle404s)
    .use(handleServerErrors);

module.exports = app;
