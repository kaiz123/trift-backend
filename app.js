
const express = require('express');
const bodyParser = require('body-parser');
const oahu = require('./routes/oahu.route');
// initialize our express app

const app = express();

app.use('/oahu', oahu);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});