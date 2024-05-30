const express = require('express');
const { getAll } = require('../../controllers/challengeController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('from forum');
})

module.exports = router;