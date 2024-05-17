const express = require('express');
const mysql = require('mysql');

// Configurar la conexión a la base de datos 
const connection = mysql.createConnection({
    host: 'https://fisiosvital.com/',
    port: 3306,
    user: 'jaume',
    password: 'P45sw0rD%',
    database: 'u495388476_fisiosvital'
});
const app = express();
const PORT = process.env.PORT || 3306;

app.use(bodyParser.json());

app.post('/cita', (req, res) => {
  const citaData = req.body;
  console.log('Datos de la cita recibidos:', citaData);
  res.json({ message: 'Cita agendada correctamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});