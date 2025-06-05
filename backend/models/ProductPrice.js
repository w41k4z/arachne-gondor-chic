const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ProductPrice = sequelize.define('ProductPrice', {
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
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'product_prices',
  timestamps: true
});

module.exports = ProductPrice;
