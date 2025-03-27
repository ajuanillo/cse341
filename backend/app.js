var express = require('express');
const mongodb = require('./db/connect');
var app = express();

const port = process.env.PORT || 8080;

app.use('/', require('./routes/routes'));
app.use('/professional', require('./routes/routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Server Connected to DB and listening on ${port}`);
    }
});