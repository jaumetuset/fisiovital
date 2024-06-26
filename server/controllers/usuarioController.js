const dbConnection = require('../config/database');

module.exports.listUsuarios = (req, res) => {
    const query = 'SELECT * FROM usuarios';

    dbConnection.query(query, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error de base de datos' });
        } else {
            res.status(200).send(rows);
        }
    });
};

exports.addUsuario = (req, res) => {
    const { nombre, apellidos, dni, telefono, correo } = req.body;
    const query = 'INSERT INTO usuarios (nombre, apellidos, dni, telefono, correo) VALUES (?, ?, ?, ?, ?)';
    
    dbConnection.query(query, [nombre, apellidos, dni, telefono, correo], (err, result) => {
        if (err) {
            console.error('Error al añadir usuario:', err);
            res.status(500).json({ error: 'Error al añadir usuario' });
        } else {
            console.log('Usuario añadido con éxito:', result);
            res.status(201).json({ message: 'Usuario añadido con éxito' });
        }
    });
};

exports.deleteUsuario = (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM usuarios WHERE id = ?';
    
    dbConnection.query(query, userId, (err, result) => {
        if (err) {
            console.error('Error al eliminar usuario:', err);
            res.status(500).json({ error: 'Error al eliminar usuario' });
        } else {
            console.log('Usuario eliminado con éxito:', result);
            res.status(200).json({ message: 'Usuario eliminado con éxito' });
        }
    });
};

exports.updateUsuario = (req, res) => {
    const userId = req.params.id;
    const { nombre, apellidos, dni, telefono, correo } = req.body;
    const query = 'UPDATE usuarios SET nombre = ?, apellidos = ?, dni = ?, telefono = ?, correo = ? WHERE id = ?';

    dbConnection.query(query, [nombre, apellidos, dni, telefono, correo, userId], (err, result) => {
        if (err) {
            console.error('Error al actualizar usuario:', err);
            res.status(500).json({ error: 'Error al actualizar usuario' });
        } else {
            console.log('Usuario actualizado con éxito:', result);

            // Consultar los datos actualizados del usuario
            const selectQuery = 'SELECT * FROM usuarios WHERE id = ?';
            dbConnection.query(selectQuery, userId, (err, rows) => {
                if (err) {
                    console.error('Error al obtener los datos actualizados del usuario:', err);
                    res.status(500).json({ error: 'Error al obtener los datos actualizados del usuario' });
                } else {
                    console.log('Datos actualizados del usuario:', rows[0]);
                    res.status(200).json({ message: 'Usuario actualizado con éxito', usuario: rows[0] });
                }
            });
        }
    });
};




module.exports.login = (req, res) => {
    const { username, password } = req.body;
    
    const query = 'SELECT * FROM usuarios WHERE nombre = ? AND password = ?';
    dbConnection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error de base de datos' });
        } else if (results.length > 0) {
            res.json({ message: 'Login exitoso', username: results[0].nombre  });
        } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    });
};

module.exports.registro = (req, res) => {
    const { nombre, apellidos, password, correo, dni, telefono } = req.body;

    // Validación de campos
    if (!nombre || !apellidos || !password || !correo || !dni || !telefono) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    // Validación de nombre y apellidos (solo letras)
    if (!/^[a-zA-Z\s]+$/.test(nombre) || !/^[a-zA-Z\s]+$/.test(apellidos)) {
        return res.status(400).json({ error: 'El nombre y los apellidos solo pueden contener letras.' });
    }

    // Validación de correo electrónico
    if (!correo.includes('@')) {
        return res.status(400).json({ error: 'El formato del correo electrónico no es válido.' });
    }

    // Validación de DNI (8 números seguidos de una letra)
    if (!/^\d{8}[a-zA-Z]$/i.test(dni)) {
        return res.status(400).json({ error: 'El formato del DNI no es válido.' });
    }

    // Validación de teléfono (solo números positivos)
    if (!/^\d+$/.test(telefono)) {
        return res.status(400).json({ error: 'El teléfono solo puede contener números positivos.' });
    }

    // Verificar duplicados por DNI en la tabla de usuarios
    dbConnection.query('SELECT * FROM usuarios WHERE dni = ?', [dni], (err, results) => {
        if (err) {
            console.error('Error en el registro:', err);
            return res.status(500).json({ error: 'Error en el registro' });
        } else if (results.length > 0) {
            return res.status(400).json({ error: 'Ya existe un usuario registrado con este DNI.' });
        } else {
            // Insertar el nuevo usuario en la tabla de usuarios
            dbConnection.query('INSERT INTO usuarios (nombre, apellidos, correo, dni, telefono, password) VALUES (?, ?, ?, ?, ?, ?)',
                [nombre, apellidos, correo, dni, telefono, password],
                (err, result) => {
                    if (err) {
                        console.error('Error en el registro:', err);
                        return res.status(500).json({ error: 'Error en el registro' });
                    } else {
                        console.log('Usuario registrado con éxito en la tabla de usuarios:', result);

                        // También insertar el nuevo usuario en la tabla de registro_usuarios
                        dbConnection.query('INSERT INTO registro_usuarios (nombre, apellidos, correo, dni, telefono, password) VALUES (?, ?, ?, ?, ?, ?)',
                            [nombre, apellidos, correo, dni, telefono, password],
                            (err, result) => {
                                if (err) {
                                    console.error('Error en el registro:', err);
                                    return res.status(500).json({ error: 'Error en el registro' });
                                } else {
                                    console.log('Usuario registrado con éxito en la tabla de registro_usuarios:', result);
                                    return res.json({ message: 'Usuario registrado con éxito' });
                                }
                            }
                        );
                    }
                }
            );
        }
    });
};






module.exports.logout = (req, res) => {
    res.json({ message: 'Sesión cerrada exitosamente' });
};

