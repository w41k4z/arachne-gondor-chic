'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      CREATE OR REPLACE VIEW v_latest_product_prices AS
        SELECT
            pp.product_id,
            pp.price
        FROM
            product_prices pp
        INNER JOIN (
            SELECT
                product_id,
                MAX(date) AS latest_date
            FROM
                product_prices
            GROUP BY
                product_id
        ) latest ON latest.product_id = pp.product_id AND latest.latest_date = pp.date
    `);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      DROP VIEW IF EXISTS v_latest_product_prices
    `);
  }
};
