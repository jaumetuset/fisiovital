const express = require('express');
const router = express.Router();

const {listUsuarios, login, registro} = require('../controllers/usuarioController');

router.get('/connect', listUsuarios);
router.post('/login', login);
router.post('/registro', registro);


module.exports = router;