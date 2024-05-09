const express = require('express');
const mysql = require('mysql');

// Configurar la conexión a la base de datos 
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'fisiovital',
    user: 'root',
    password: ' '
});

// Crear una aplicación Express
const app = express();

// Definir endpoints para interactuar con la base de datos
app.get('/datos', (req, res) => {
    // Realizar consulta SQL a la base de datos
    connection.query('SELECT * FROM tabla_ejemplo', (err, results) => {
        if (err) {
            console.error('Error al consultar la base de datos:', err);
            res.status(500).send({ error: 'Error en la base de datos' });
            return;
        }
        // Enviar los resultados de la consulta al cliente
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor Node.js escuchando en el puerto 3000');
});