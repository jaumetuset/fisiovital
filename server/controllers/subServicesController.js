const dbConnection = require('../config/database');

// Controlador para obtener la lista de todos los subservicios
module.exports.listSubServices = (req, res) => {
    const query = 'SELECT * FROM subservicios';

    dbConnection.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error de base de datos' });
        } else {
            res.status(200).send(rows);
        }
    });
};

// Controlador para añadir un nuevo sub-servicio
module.exports.addSubService = (req, res) => {
    const { servicio_id, nombre } = req.body;

    if (!servicio_id || !nombre) {
        return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    const query = 'INSERT INTO subservicios (servicio_id, nombre) VALUES (?, ?)';
    const values = [servicio_id, nombre];

    dbConnection.query(query, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al añadir sub-servicio' });
        } else {
            return res.status(201).json({ message: 'Sub-servicio añadido correctamente' });
        }
    });
};

// Controlador para eliminar un sub-servicio por ID
module.exports.deleteSubService = (req, res) => {
    const subServiceId = req.params.id;

    const query = 'DELETE FROM subservicios WHERE subservicio_id = ?';

    dbConnection.query(query, [subServiceId], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error al eliminar sub-servicio' });
        } else {
            return res.status(200).json({ message: 'Sub-servicio eliminado correctamente' });
        }
    });
};