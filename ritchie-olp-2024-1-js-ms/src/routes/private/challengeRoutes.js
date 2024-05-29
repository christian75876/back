const express = require('express');
const { getAll, getById } = require('../../controllers/challengeController'); // Asegúrate de que getById esté exportado

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById); // Nueva ruta para obtener un reto por ID

module.exports = router;
