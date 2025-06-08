'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('daily_products', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE'
      }
    });

    await queryInterface.addConstraint('daily_products', {
      fields: ['date', 'product_id'],
      type: 'unique',
      name: 'unique_date_product'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('daily_products');
  }
};
