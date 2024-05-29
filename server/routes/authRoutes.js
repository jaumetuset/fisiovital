const express = require('express');
const router = express.Router();

const { listUsuarios, addUsuario, deleteUsuario, updateUsuario, login, registro } = require('../controllers/usuarioController');
const { crearCita, listCitas,addCita,deleteCita,updateCita } = require('../controllers/citaController.js');
const { listServices, addService, deleteService } = require('../controllers/servicesController.js');
const { listSubServicesFiltered, listSubServices, addSubService, deleteSubService } = require('../controllers/subServicesController');

router.get('/listUsuarios', listUsuarios);
router.post('/listUsuarios', addUsuario);
router.delete('/listUsuarios/:id', deleteUsuario);
router.put('/listUsuarios/:id', updateUsuario); 

router.post('/login', login);
router.post('/registro', registro);

router.post('/cita', crearCita);

router.get('/listCitas', listCitas);
router.post('/listCitas', addCita);
router.delete('/listCitas/:id', deleteCita);
router.put('/listCitas/:id', updateCita);

router.get('/listaSubServiciosFiltrados', listSubServicesFiltered);

router.get('/listServicios', listServices);
router.post('/listServicios', addService);
router.delete('/listServicios/:id', deleteService);


router.get('/listaSubServicios', listSubServices);
router.post('/listaSubServicios', addSubService);
router.delete('/listaSubServicios/:id', deleteSubService);




module.exports = router;
