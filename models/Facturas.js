const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const Facturas = sequelize.define('Facturas', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  apellido: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  dni: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  email: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  direccion: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  telefono: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  fk_id_pedido: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  
  
});
module.exports = Facturas;