const routes = require('express').Router();

const myController = require('../controllers');


routes.get('/', myController.home);
routes.get('/professionals', myController.getAll);
routes.get('/:id', myController.getSingle);


module.exports = routes;