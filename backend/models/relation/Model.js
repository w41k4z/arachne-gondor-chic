const Category = require('../Category');
const Product = require('../Product');
const DailyProduct = require('../DailyProduct');
const StockMovement = require('../StockMovement');
const ProductPrice = require('../ProductPrice');

// Category -> Product
Category.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });

// Product -> DailyProduct
Product.hasMany(DailyProduct, { foreignKey: 'product_id' });
DailyProduct.belongsTo(Product, { foreignKey: 'product_id' });

// Product -> StockMovement
Product.hasMany(StockMovement, { foreignKey: 'product_id' });
StockMovement.belongsTo(Product, { foreignKey: 'product_id' });

// Product -> ProductPrice
Product.hasMany(ProductPrice, { foreignKey: 'product_id' });
ProductPrice.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = {
  Category,
  Product,
  DailyProduct,
  StockMovement,
  ProductPrice
};
