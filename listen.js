const app = require('./server.js');
//const PORT = process.env.PORT || 3000;
const { PORT = 9090 } = process.env;

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Listening on port ', PORT);
    }
});