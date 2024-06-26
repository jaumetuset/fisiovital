const dbConnection = require('../config/database');

// Controlador para manejar la creación de un nuevo servicio
module.exports.addService = (req, res) => {
    const { nombre } = req.body;
    const query = 'INSERT INTO servicios (nombre) VALUES (?)';
    
    dbConnection.query(query, [nombre], (err, result) => {
        if (err) {
            console.error('Error al añadir servicio:', err);
            res.status(500).json({ error: 'Error al añadir servicio' });
        } else {
            console.log('Servicio añadido con éxito:', result);
            res.status(201).json({ message: 'Servicio añadido con éxito' });
        }
    });
};

// Controlador para obtener la lista de todos los servicios
module.exports.listServices = (req, res) => {
    const query = 'SELECT * FROM servicios';

    dbConnection.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error de base de datos' });
        } else {
            res.status(200).send(rows);
        }
    });
};

// Controlador para eliminar un servicio por su ID
module.exports.deleteService = (req, res) => {
    const serviceId = req.params.id;
    
    // Verifica si el ID del servicio es válido
    if (!serviceId) {
        return res.status(400).json({ error: 'ID de servicio no proporcionado' });
    }

    // Utiliza el nombre correcto de la columna de identificación del servicio
    const query = 'DELETE FROM servicios WHERE servicio_id = ?';
    
    dbConnection.query(query, serviceId, (err, result) => {
        if (err) {
            console.error('Error al eliminar servicio:', err);
            return res.status(500).json({ error: 'Error al eliminar servicio' });
        } else {
            return res.status(200).json({ message: 'Servicio eliminado con éxito' });
        }
    });
};
