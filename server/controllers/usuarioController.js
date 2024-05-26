const dbConnection = require('../config/database');

module.exports.listUsuarios = (req, res) => {
    const query = 'SELECT * FROM usuarios';

    dbConnection.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Error de base de datos' });
        } else {
            console.log(results);
            res.json(results);
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
            res.json({ message: 'Login exitoso', user: results[0] });
        } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    });
};


module.exports.registro = (req, res) => {
    const { nombre, apellidos, password, correo, dni, telefono } = req.body;
    // Guarda los datos en la tabla de registro de usuarios
    dbConnection.query('INSERT INTO registro_usuarios (nombre, apellidos, correo, dni, telefono, password) VALUES (?, ?, ?, ?, ?, ?)', 
        [nombre, apellidos, correo, dni, telefono, password], 
        (err, result) => {
            if (err) {
                console.error('Error en el registro:', err);
                res.status(500).json({ error: 'Error en el registro' });
            } else {
                console.log('Usuario registrado con éxito en la tabla de registro de usuarios:', result);
                // También guarda los datos en la tabla de usuarios (nombre y contraseña)
                dbConnection.query('INSERT INTO usuarios (nombre, password) VALUES (?, ?)', 
                    [nombre, password], 
                    (err, result) => {
                        if (err) {
                            console.error('Error en el registro en la tabla de usuarios:', err);
                            // Si ocurre un error, podrías considerar eliminar el registro de la tabla de registro de usuarios para mantener la integridad de los datos
                            res.status(500).json({ error: 'Error en el registro' });
                        } else {
                            console.log('Usuario registrado con éxito en la tabla de usuarios:', result);
                            res.json({ message: 'Usuario registrado con éxito' });
                        }
                    }
                );
            }
        }
    );
};

module.exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error al cerrar sesión:', err);
            res.status(500).json({ error: 'Error al cerrar sesión' });
        } else {
            console.log('Sesión cerrada exitosamente');
            res.json({ message: 'Sesión cerrada exitosamente' });
        }
    });
};