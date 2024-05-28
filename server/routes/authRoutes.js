const express = require('express');
const router = express.Router();

const { perfil, listUsuarios, addUsuario, deleteUsuario, updateUsuario, login, registro } = require('../controllers/usuarioController');
const { crearCita } = require('../controllers/citaController.js');
const { listServices, addService, deleteService } = require('../controllers/servicesController.js');
const { listSubServices, addSubService, deleteSubService } = require('../controllers/subServicesController');

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


router.get('/listaSubServicios', listSubServices);
router.post('/listaSubServicios', addSubService);
router.delete('/listaSubServicios/:id', deleteSubService);



module.exports = router;
