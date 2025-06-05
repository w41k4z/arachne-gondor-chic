const productService = require("../../services/product/ProductService");

async function getDailyProducts(req, res) {
  try {
    const products = await productService.getDailyProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
}

module.exports = {
  getDailyProducts,
};
