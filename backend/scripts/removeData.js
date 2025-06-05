const {
  DailyProduct,
  ProductPrice,
  Product,
  Category,
  StockMovement,
} = require("../models/relation/Model");

async function clearAllData() {
  try {
    console.log("🚀 Suppression de toutes les données...");

    // Supprime toutes les données en cascade et vite (truncate)
    await StockMovement.destroy({ where: {}, truncate: true, cascade: true });
    await ProductPrice.destroy({ where: {}, truncate: true, cascade: true });
    await DailyProduct.destroy({ where: {}, truncate: true, cascade: true });
    await Product.destroy({ where: {}, truncate: true, cascade: true });
    await Category.destroy({ where: {}, truncate: true, cascade: true });

    console.log("✅ Toutes les données ont été supprimées !");
  } catch (error) {
    console.error("❌ Erreur lors de la suppression des données :", error);
  }
}

clearAllData();
