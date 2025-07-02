'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE VIEW v_product_stock_quantities AS
        SELECT
          sm.product_id,
          SUM(sm.quantity_in) - SUM(sm.quantity_out) AS quantity
        FROM
          stock_movements sm
        INNER JOIN
          products p ON sm.product_id = p.id
        GROUP BY
          sm.product_id
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP VIEW IF EXISTS v_product_stock_quantities
    `);
  }
};
