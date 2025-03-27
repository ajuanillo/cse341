const routes = require('express').Router();
const myController = require('../controllers/contacts');

routes.get('/', (req, res, next) => {
    res.json('You are at home')
});

routes.get('/contacts', require('./contacts'));

module.exports = routes;