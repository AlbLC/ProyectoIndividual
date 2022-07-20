const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const Usuario = sequelize.define('Usuarios', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  apellido: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dni: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  direccion: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  telefono: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contrasena: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  
});
module.exports = Usuario;