const routes = require('./routes');
const express = require('express'); // o express é uma função, que quando chamada cria um novo servidor, uma nova porta de entrada para enviar requisições e receber respostas
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.p4nyeac.mongodb.net/tindev?retryWrites=true&w=majority');

//por padrão, o Express não vem com o entendimento de JSON. Incluir:
app.use(express.json());

// quando queremos colocar config que está em outro arquivo/modulo (como se fosse adicionando um plugin)
app.use(routes);


app.listen(3333); //a porta que ele irá ouvir

