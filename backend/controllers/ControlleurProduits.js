const productService = require("../services/ProduitsServices/ProduitsManager");

async function produitDuJour(req, res) {
  try {
    const product = await productService.rechercherProduitDuJour();
    if (!product) {
      return res.json({
        message: "Aucun produit mis en avant aujourd’hui",
        payload: product,
        error: {},
      });
    }
    return res.json({
      message: "",
      payload: product,
      error: {},
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Internal Error", error: error.message });
  }
}

module.exports = {
  produitDuJour,
};
