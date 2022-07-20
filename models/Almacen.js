const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const Almacen = sequelize.define('Almacen', {
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
  precio: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  tipoRepuesto: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  
  
});
module.exports = Almacen;