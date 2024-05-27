const dbConnection = require('../config/database');

// Controlador para crear una nueva cita
module.exports.crearCita = (req, res) => {
    const { nombre, apellido, correo, dni, telefono, servicio, subServicio, horario, fecha } = req.body;
    
    // Obtenemos el ID del usuario desde el cuerpo de la solicitud o de la sesión, si está autenticado
    const usuario_id = req.body.usuario_id || req.session.usuario_id;

    // Guardar la cita en la base de datos, incluyendo el usuario_id
    dbConnection.query('INSERT INTO citas (nombre, apellido, correo, dni, telefono, servicio, sub_servicio, horario, fecha, usuario_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [nombre, apellido, correo, dni, telefono, servicio, subServicio, horario, fecha, usuario_id], 
        (err, result) => {
            if (err) {
                console.error('Error al crear la cita:', err);
                res.status(500).json({ error: 'Error al crear la cita' });
            } else {
                console.log('Cita creada con éxito:', result);
                res.json({ message: 'Cita creada con éxito' });
            }
        }
    );
};
