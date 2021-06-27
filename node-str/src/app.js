const Express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = Express();

//Conecta ao banco

mongoose.connect('mongodb+srv://admin:admin@test.bgulh.mongodb.net/test'); 

//Carrega os Models

const Usuario = require('./models/Usuario');

//Carrega as Rotas
const indexRoute = require('./routes/index');
const UsuarioRote = require('./routes/UsuarioRote');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/Usuario', UsuarioRote);

module.exports = app;