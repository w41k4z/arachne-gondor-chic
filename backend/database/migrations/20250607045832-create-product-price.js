'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product_prices', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
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
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
    });

    await queryInterface.sequelize.query(`
      ALTER TABLE product_prices
      ADD CONSTRAINT price_positive CHECK (price > 0)
    `);

    await queryInterface.addConstraint('product_prices', {
      fields: ['date', 'product_id', 'price'],
      type: 'unique',
      name: 'unique_price_per_product_per_day'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product_prices');
  }
};
