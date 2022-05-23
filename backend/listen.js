const app = require('./server.js');
const PORT = process.env.PORT || 3000;
console.log(PORT)
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Listening on port ', PORT);
    }
});