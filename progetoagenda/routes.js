const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController.js');
const loginController = require('./src/controllers/loginController');

//Rotas da Home
route.get('/', homeController.index);

//Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

module.exports = route;
