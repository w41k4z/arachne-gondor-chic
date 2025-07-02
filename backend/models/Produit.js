const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Produit = sequelize.define('Produit', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  libelle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  estDuJour: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  prix: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantiteEnStock: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 't_produit',
  timestamps: false
});

module.exports = Produit;
