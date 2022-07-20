const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const Repuestos = sequelize.define('Repuestos', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  marca: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  modelo: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  tipoRepuesto: {
    type: Sequelize.STRING,
    allowNull: false,
  }, 
  precio: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }, 
  
});
module.exports = Repuestos;
