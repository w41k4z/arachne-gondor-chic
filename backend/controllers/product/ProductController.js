const productService = require("../../services/product/ProductService");

async function getDailyProducts(req, res) {
  try {
    const products = await productService.getDailyProducts();
    if (products.length === 0) {
      res.json({
        message: "Aucun produit mis en avant aujourd’hui",
        payload: products,
        error: {},
      });
    }
    res.json({
      message: "",
      payload: products,
      error: {},
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
}

module.exports = {
  getDailyProducts,
};
