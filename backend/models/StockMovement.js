const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const StockMovement = sequelize.define('StockMovement', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  quantity_in: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  quantity_out: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'stock_movements',
  timestamps: false
});

module.exports = StockMovement;
