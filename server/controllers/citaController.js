const dbConnection = require('../config/database');

module.exports.crearCita = (req, res) => {
  const { nombre, apellido, correo, dni, telefono, servicio, subServicio, horario, fecha } = req.body;

  // Validación de campos
  if (!nombre || !apellido || !correo || !dni || !telefono || !servicio || !subServicio || !horario || !fecha) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoRegex.test(correo)) {
    return res.status(400).json({ error: 'El formato del correo electrónico no es válido' });
  }

  if (!/^\d{8}[a-zA-Z]$/i.test(dni)) {
    return res.status(400).json({ error: 'El formato del DNI no es válido' });
  }

  if (!/^\d{9}$/i.test(telefono)) {
    return res.status(400).json({ error: 'El formato del teléfono no es válido' });
  }

  // Crear la cita
  const queryCita = 'INSERT INTO citas (nombre, apellido, correo, dni, telefono, horario, fecha, servicio_id, subservicio_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  dbConnection.query(queryCita, [nombre, apellido, correo, dni, telefono, horario, fecha, servicio, subServicio], (err, resultCita) => {
      if (err) {
          console.error('Error al añadir cita:', err);
          return res.status(500).json({ error: 'Error interno del servidor al añadir cita.', message: err.message });
      } else {
          console.log('Resultado de la inserción:', resultCita);
          res.status(201).json({
              message: 'Cita añadida con éxito',
              cita: {
                  id: resultCita.insertId,
                  nombre,
                  apellido,
                  correo,
                  dni,
                  telefono,
                  servicio,
                  subServicio,
                  horario,
                  fecha
              }
          });
      }
  });
};

module.exports.listCitas = (req, res) => {
  const query = 'SELECT * FROM citas';

  dbConnection.query(query, (err, rows) => {
      if (err) {
          console.error(err);
          res.status(500).json({ error: 'Error de base de datos' });
      } else {
          res.status(200).send(rows);
      }
  });
};

exports.addCita = (req, res) => {
  const { nombre, apellido, dni, telefono, correo, horario, fecha, servicio_id, subservicio_id } = req.body;
  const query = 'INSERT INTO citas (nombre, apellido, dni, telefono, correo, horario, fecha, servicio_id, subservicio_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  
  dbConnection.query(query, [nombre, apellido, dni, telefono, correo, horario, fecha, servicio_id, subservicio_id], (err, result) => {
      if (err) {
          console.error('Error al añadir cita:', err);
          res.status(500).json({ error: 'Error al añadir cita' });
      } else {
          console.log('Cita añadida con éxito:', result);
          res.status(201).json({ message: 'Cita añadida con éxito' });
      }
  });
};

exports.deleteCita = (req, res) => {
  const citaId = req.params.id;
  const query = 'DELETE FROM citas WHERE id = ?';
  
  dbConnection.query(query, citaId, (err, result) => {
      if (err) {
          console.error('Error al eliminar cita:', err);
          res.status(500).json({ error: 'Error al eliminar cita' });
      } else {
          console.log('Cita eliminada con éxito:', result);
          res.status(200).json({ message: 'Cita eliminada con éxito' });
      }
  });
};

exports.updateCita = (req, res) => {
  const citaId = req.params.id;
  const { nombre, apellido, dni, telefono, correo, horario, fecha, servicio_id, subservicio_id } = req.body;
  const query = 'UPDATE citas SET nombre = ?, apellido = ?, dni = ?, telefono = ?, correo = ?, horario = ?, fecha = ?, servicio_id = ?, subservicio_id = ? WHERE id = ?';

  dbConnection.query(query, [nombre, apellido, dni, telefono, correo, horario, fecha, servicio_id, subservicio_id, citaId], (err, result) => {
      if (err) {
          console.error('Error al actualizar cita:', err);
          res.status(500).json({ error: 'Error al actualizar cita' });
      } else {
          console.log('Cita actualizada con éxito:', result);

          // Consultar los datos actualizados de la cita
          const selectQuery = 'SELECT * FROM citas WHERE id = ?';
          dbConnection.query(selectQuery, citaId, (err, rows) => {
              if (err) {
                  console.error('Error al obtener los datos actualizados de la cita:', err);
                  res.status(500).json({ error: 'Error al obtener los datos actualizados de la cita' });
              } else {
                  console.log('Datos actualizados de la cita:', rows[0]);
                  res.status(200).json({ message: 'Cita actualizada con éxito', cita: rows[0] });
              }
          });
      }
  });
};