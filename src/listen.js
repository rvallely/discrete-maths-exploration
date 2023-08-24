const app = require('./server');

const { PORT = 9090 } = process.env;

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    } else {
        // eslint-disable-next-line no-console
        console.log('Listening on port ', PORT);
    }
});
