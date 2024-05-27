const express = require('express');
const router = express.Router();

const {listUsuarios, login, registro} = require('../controllers/usuarioController');
const { crearCita } = require('../controllers/citaController.js');

router.get('/connect', listUsuarios);
router.post('/login', login);
router.post('/registro', registro);
router.post('/cita', crearCita);

module.exports = router;