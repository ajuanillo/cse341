var express = require('express');
var app = express();

const port = process.env.PORT || 3080;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});