const routes = require('express').Router();

const myController = require('../controllers');
routes.get('/', myController.home);
routes.get('/professional', myController.getSingle);
routes.get('/professionals', myController.getAll);

module.exports = routes;