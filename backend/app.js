var express = require('express');
const mongodb = require('./data/database');
var app = express();

const port = process.env.PORT || 8080;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Server Connected to DB and listening on ${port}`);
    }
});