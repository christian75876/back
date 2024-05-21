require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { unleashHTMLWelcome } = require('./helpers/unleash-welcome-a-la-nico');
const router = require('./routes/router');
const auditTrail = require('../src/audit-trail'); // Importar audit trail

const app = express();

// Middlewares
app.use(cors()); // Distinguir el origen de las peticiones
app.use(express.json()); // Parsear el body de las peticiones

// Rutas
app.get('/', unleashHTMLWelcome);
app.use('/api', router);

module.exports = app;


app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});