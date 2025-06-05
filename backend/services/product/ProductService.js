const { DailyProduct, Product } = require("../../models/relation/Model");
const { Op } = require("sequelize");

async function getDailyProducts() {
  const today = new Date().toISOString().split("T")[0];
  const dailyProducts = await DailyProduct.findAll({
    where: {
      date: {
        [Op.eq]: today,
      },
    },
    include: [
      {
        model: Product,
      },
    ],
  });
  return dailyProducts;
}

module.exports = {
  getDailyProducts,
};
