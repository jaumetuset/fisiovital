const express = require('express');
const mysql = require('mysql');

// Configurar la conexión a la base de datos 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'fisiovital'
});

connection.connect((err) => {
  if (err) {
      console.error('Error conectando a la base de datos:', err);
      return;
  }
  console.log('Conexión a la base de datos exitosa');
});



module.exports = connection;