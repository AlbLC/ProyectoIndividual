const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const Pedidos = sequelize.define('Pedidos', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fecha: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  hora: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  
  
});
module.exports = Pedidos;