const express = require('express'); // o express é uma função, que quando chamada cria um novo servidor, uma nova porta de entrada para enviar requisições e receber respostas
const routes = require('./routes');
  
const server = express();

// quando queremos colocar config que está em outro arquivo/modulo (como se fosse adicionando um plugin)
server.use(routes)

server.listen(3333); //a porta que ele irá ouvir

