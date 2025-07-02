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
    allowNull: false,
    field: 'product_id'
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  quantityIn: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: 'quantity_in',
    validate: {
      min: {
        args: [0],
        msg: 'Quantity in must be greater or equal to 0'
      }
    }
  },
  quantityOut: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    field: 'quantity_out',
    validate: {
      min: {
        args: [0],
        msg: 'Quantity out must be greater or equal to 0'
      }
    }
  }
}, {
  tableName: 'stock_movements',
  timestamps: false
});

module.exports = StockMovement;
