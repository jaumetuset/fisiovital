const express = require('express');
const router = express.Router();

const { listUsuarios, addUsuario, deleteUsuario, updateUsuario, login, registro } = require('../controllers/usuarioController');
const { crearCita } = require('../controllers/citaController.js');
const { listServices, addService, deleteService } = require('../controllers/servicesController.js');

router.get('/listUsuarios', listUsuarios);
router.post('/listUsuarios', addUsuario);
router.delete('/listUsuarios/:id', deleteUsuario);
router.put('/listUsuarios/:id', updateUsuario); 
router.post('/login', login);
router.post('/registro', registro);
router.post('/cita', crearCita);

router.get('/listServicios', listServices);
router.post('/listServicios', addService);
router.delete('/listServicios/:id', deleteService);


module.exports = router;
