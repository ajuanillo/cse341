const routes = require('express').Router();
const myController = require('../controllers/contacts');

routes.get('/', myController.getAll);

routes.get('/:Id', myController.getSingle);

module.exports = routes;  