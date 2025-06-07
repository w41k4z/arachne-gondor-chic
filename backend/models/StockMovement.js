const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const StockMovement = sequelize.define('StockMovement', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
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
  quantityIn: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  quantityOut: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  tableName: 'stock_movements',
  timestamps: true
});

module.exports = StockMovement;
