'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('t_produit', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      reference: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      libelle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estDuJour: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      prix: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      quantiteEnStock: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('t_produit');
  }
};
