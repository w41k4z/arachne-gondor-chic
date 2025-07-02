'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stock_movements', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      quantity_in: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      quantity_out: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      }
    });

    await queryInterface.sequelize.query(`
      ALTER TABLE stock_movements
      ADD CONSTRAINT quantity_in_non_negative CHECK (quantity_in >= 0),
      ADD CONSTRAINT quantity_out_non_negative CHECK (quantity_out >= 0)
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stock_movements');
  }
};
