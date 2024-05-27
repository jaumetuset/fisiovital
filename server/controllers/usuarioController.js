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
    const { nombre, apellidos, dni, telefono, email } = req.body;
    const query = 'INSERT INTO usuarios (nombre, apellidos, dni, telefono, email) VALUES (?, ?, ?, ?, ?)';
    
    dbConnection.query(query, [nombre, apellidos, dni, telefono, email], (err, result) => {
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
    const { nombre, apellidos, dni, telefono, email } = req.body;
    const query = 'UPDATE usuarios SET nombre = ?, apellidos = ?, dni = ?, telefono = ?, email = ? WHERE id = ?';

    dbConnection.query(query, [nombre, apellidos, dni, telefono, email, userId], (err, result) => {
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
    // Verificar si ya existe un usuario con el mismo nombre y contraseña en alguna de las dos tablas
    dbConnection.query('SELECT * FROM usuarios WHERE nombre = ? AND password = ?', [nombre, password], (err, results) => {
        if (err) {
            console.error('Error en el registro:', err);
            res.status(500).json({ error: 'Error en el registro' });
        } else if (results.length > 0) {
            // Si ya existe un usuario con el mismo nombre y contraseña en la tabla de usuarios, devolver un error
            res.status(400).json({ error: 'Ya existe un usuario con este nombre y contraseña' });
        } else {
            // Verificar también en la tabla de registro_usuarios
            dbConnection.query('SELECT * FROM registro_usuarios WHERE nombre = ? AND password = ?', [nombre, password], (err, results) => {
                if (err) {
                    console.error('Error en el registro:', err);
                    res.status(500).json({ error: 'Error en el registro' });
                } else if (results.length > 0) {
                    // Si ya existe un usuario con el mismo nombre y contraseña en la tabla de registro_usuarios, devolver un error
                    res.status(400).json({ error: 'Ya existe un usuario con este nombre y contraseña' });
                } else {
                    // Si no existe un usuario con el mismo nombre y contraseña en ninguna de las dos tablas, proceder con el registro
                    dbConnection.query('INSERT INTO registro_usuarios (nombre, apellidos, correo, dni, telefono, password) VALUES (?, ?, ?, ?, ?, ?)', 
                        [nombre, apellidos, correo, dni, telefono, password], 
                        (err, result) => {
                            if (err) {
                                console.error('Error en el registro:', err);
                                res.status(500).json({ error: 'Error en el registro' });
                            } else {
                                console.log('Usuario registrado con éxito en la tabla de registro_usuarios:', result);
                                res.json({ message: 'Usuario registrado con éxito' });
                            }
                        }
                    );
                }
            });
        }
    });
};


module.exports.logout = (req, res) => {
    res.json({ message: 'Sesión cerrada exitosamente' });
};