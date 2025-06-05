const sequelize = require("../config/db"); // ton instance sequelize
const models = require("../models/relation/Model"); // importe tous les modèles

async function syncDatabase() {
  try {
    console.log("Synchronisation des tables avec `alter: true`...");
    await sequelize.sync({ alter: true }); // modifie les colonnes si besoin, sans tout effacer
    console.log("Tables synchronisées avec succès");
  } catch (error) {
    console.error("Erreur lors de la synchronisation :", error);
  } finally {
    await sequelize.close();
  }
}

syncDatabase();
