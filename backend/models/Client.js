const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  motDePasse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'client',
  timestamps: false
});

module.exports = Client;
