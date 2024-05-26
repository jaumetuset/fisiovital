const db = require('../config/db');

const Usuario = db.define('usuario', {
  nombre: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  rol: {
    type: db.Sequelize.ENUM('administrador', 'cliente'),
    defaultValue: 'cliente'
  }
});

module.exports = Usuario;