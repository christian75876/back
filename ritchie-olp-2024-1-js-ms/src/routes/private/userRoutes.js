const express = require('express');
const { getAll, getById, update, delete: deleteUser } = require('../../controllers/userController');

const router = express.Router();

router.get('/all', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', deleteUser);
// api/private/router/userRoutes/getAll/

module.exports = router;
