const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const ViewProduct = sequelize.define(
  'ViewProduct',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      field: 'category_id'
    },
    reference: {
      type: DataTypes.STRING
    },
    label: {
      type: DataTypes.STRING
    },
    imageUrl: {
      type: DataTypes.STRING,
      field: 'image_url'
    },
    price: {
      type: DataTypes.FLOAT,
    },
    quantity: {
      type: DataTypes.INTEGER,
    }
  },
  {
    tableName: 'v_all_products',
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = ViewProduct;
