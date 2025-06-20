const {
  DailyProduct,
  Product,
  Category,
  StockMovement,
  ProductPrice,
} = require("../../../models/relation/Model");
const { Op } = require("sequelize");

async function getDailyProducts() {
  const today = new Date().toISOString().split("T")[0];

  const dailyProducts = await DailyProduct.findAll({
    where: {
      date: { [Op.eq]: today },
    },
    include: [
      {
        model: Product,  
        include: [
          { model: Category },
          {
            model: StockMovement,
            required: false,
          },
          { model: ProductPrice, required: false },
        ],
      },
    ],
  });

  // Calcul du stock restant pour chaque produit
  const result = dailyProducts.map((dailyProduct) => {
    const product = dailyProduct.Product;
    const stockMovements = product.StockMovements || [];

    const totalIn = stockMovements.reduce(
      (sum, m) => sum + (m.quantityIn || 0),
      0
    );
    const totalOut = stockMovements.reduce(
      (sum, m) => sum + (m.quantityOut || 0),
      0
    );
    const stockRestant = totalIn - totalOut;

    return {
      ...dailyProduct.toJSON(),
      Product: {
        ...product.toJSON(),
        stockRestant,
      },
    };
  });

  return result;
}

module.exports = {
  getDailyProducts,
};