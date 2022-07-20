const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const Reparaciones = sequelize.define('Reparaciones', {
    id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  marca: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  modelo: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  descripcion: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  precio: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  fk_id_pedido: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  
  
});
module.exports = Reparaciones;