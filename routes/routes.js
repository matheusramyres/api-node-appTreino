const express = require ('express');
const routes = express.Router();
const UsuarioController = require('../controller/UsuarioController');

routes.get('/user', UsuarioController.create);

module.exports = routes;