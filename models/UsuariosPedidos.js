const Sequelize = require('sequelize');
const sequelize = require('../databases/sql');

const UsuariosPedidos = sequelize.define('Usuarios_Pedidos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fk_id_usuario: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fk_id_pedido: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  
});
module.exports = UsuariosPedidos;