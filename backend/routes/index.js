const routes = require('express').Router();

const myController = require('../controllers');
routes.get('/', myController.home);
routes.get('/professional', myController.personData);

module.exports = routes;