const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./network/routes');

db('mongodb+srv://user_example:123prueba@cluster0.byrmpb0.mongodb.net/back_example_db');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(4000);
console.log('La app está escuchando en el puerto http://localchost:4000');