const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const PedidosRepuestos = sequelize.define('Pedidos_Repuestos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fk_id_repuesto: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fk_id_pedido: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  
});
module.exports = PedidosRepuestos;