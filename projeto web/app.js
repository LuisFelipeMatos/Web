const express = require('express');
const usuario = require('./rotas/usuario');
const nota = require('./rotas/nota');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/usuario', usuario);

app.use('/nota', nota);





app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});