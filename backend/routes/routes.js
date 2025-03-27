const routes = require('express').Router();
const myController = require('../controllers/controller');

routes.get('/', myController.home);
routes.get('/professional', myController.getAll);
routes.get('/:id', myController.getSingle);


module.exports = routes;