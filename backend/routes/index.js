const routes = require('express').Router();

routes.get('/', (req, res, next) => {
    res.json('You are at home')
});

routes.use('/contacts', require('./contacts'));

module.exports = routes;