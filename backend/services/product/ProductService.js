const {
  DailyProduct,
  Category,
  ViewProduct
} = require("../../models/relation/Model");
const { Op } = require("sequelize");

async function getDailyProducts() {
  const today = new Date().toISOString().split("T")[0];

  return await DailyProduct.findAll({
    where: {
      date: { [Op.eq]: today },
    },
    include: [
      {
        model: ViewProduct,
        as: 'product',
        include: [
          { model: Category, as: 'category' },
        ],
      },
    ],
  });
}

module.exports = {
  getDailyProducts,
};
