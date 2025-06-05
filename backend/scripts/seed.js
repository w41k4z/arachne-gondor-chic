const {
  Category,
  Product,
  DailyProduct,
  ProductPrice,
  StockMovement,
} = require("../models/relation/Model");
const { faker } = require("@faker-js/faker"); // installe faker si ce n'est pas déjà fait

async function insertTestData() {
  try {
    console.log("🔄 Insertion des données...");

    // Créer une catégorie
    const category = await Category.create({
      name: faker.commerce.department(),
    });

    // Créer plusieurs produits
    for (let i = 0; i < 3; i++) {
      const product = await Product.create({
        categoryId: category.id,
        reference: `REF-${i + 1}`,
        label: faker.commerce.productName(),
        imageUrl: faker.image.url(),
      });

      const today = new Date().toISOString().split("T")[0];

      // Produit du jour
      await DailyProduct.create({
        date: today,
        productId: product.id,
      });

      // Prix du jour
      await ProductPrice.create({
        date: today,
        productId: product.id,
        price: faker.number.float({ min: 1000, max: 10000, fractionDigits: 2 }),
      });

      // Mouvement de stock
      await StockMovement.create({
        productId: product.id,
        date: today,
        description: faker.commerce.productAdjective(),
        quantityIn: faker.number.int({ min: 10, max: 100 }),
        quantityOut: faker.number.int({ min: 0, max: 20 }),
      });
    }

    console.log("✅ Données de test insérées avec succès !");
  } catch (error) {
    console.error("❌ Erreur :", error);
  }
}

insertTestData();
