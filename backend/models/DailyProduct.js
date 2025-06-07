const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DailyProduct = sequelize.define('DailyProduct', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    unique: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id'
  }
}, {
  tableName: 'daily_products',
  timestamps: false
});

module.exports = DailyProduct;
