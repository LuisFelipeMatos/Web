const express = require('express');
const usuario = require('./rotas/usuario');
const nota = require('./rotas/nota');
const checks = require('./routes/checklist');
const tags = require('./routes/tag')
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/checklist', checks);
app.use('/tag', tags);
app.use('/usuario', usuario);
app.use('/nota', nota);





app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});