const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const database = require('../config/db');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8000;

MongoClient.connect(database.url, {useNewUrlParser: true}, (err, client) => {
    let db = client.db('sandbox');
    if (err) return console.log(err);
    require('./routes')(app, db, err);
    app.listen(port, () => {
        console.log('We are live on ' + port);
    });
});