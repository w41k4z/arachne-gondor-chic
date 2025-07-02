'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('client', {
      id: {
        // autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      pseudo: {
        type: Sequelize.STRING
      },
      motDePasse: {
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('client');
  }
};