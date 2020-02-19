const express = require('express');
const app = express();
const port = 3000;
const hostname = 'localhost';
const backlog = () => console.log(`Servidor rodando na porta ${port}`);
const petRotas = require('./routes/pet');



app.listen(port, hostname, backlog);
app.use(petRotas);