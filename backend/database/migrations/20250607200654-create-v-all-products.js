'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE VIEW v_all_products AS
        SELECT
            p.*,
            COALESCE(lp.price, 0) AS price,
            COALESCE(psq.quantity, 0) AS quantity
        FROM
            products p
        LEFT JOIN v_latest_product_prices lp ON lp.product_id = p.id
        LEFT JOIN v_product_stock_quantities psq ON psq.product_id = p.id
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP VIEW IF EXISTS v_all_products
    `);
  }
};
