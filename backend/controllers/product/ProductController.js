const productService = require("../../services/product/ProductService");

async function getDailyProducts(req, res) {
  try {
    const products = await productService.getDailyProducts();
    if (products.length === 0) {
      return res.json({
        message: "Aucun produit mis en avant aujourd’hui",
        payload: products,
        error: {},
      });
    }
    return res.json({
      message: "",
      payload: products,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Error" });
  }
}

module.exports = {
  getDailyProducts,
};
