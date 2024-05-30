const express = require('express');
const { getAll, getById, create } = require('../../controllers/challengeController'); // Asegúrate de que getById esté exportado

const router = express.Router();

router.get('/', getAll); //Ruta para Traer informacion de la tabla challenge
router.get('/:id', getById); // Ruta para obtener un reto por ID
router.post('/', create); //Ruta para crear un nuevo reto)

module.exports = router;
