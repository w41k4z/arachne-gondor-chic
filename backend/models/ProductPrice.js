const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ProductPrice = sequelize.define('ProductPrice', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id'
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: {
        args: [0.01],
        msg: 'Price must be greater than 0'
      }
    }
  }
}, {
  tableName: 'product_prices',
  timestamps: false
});

module.exports = ProductPrice;
