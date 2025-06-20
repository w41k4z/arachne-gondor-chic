const Category = require('../Category');
const Product = require('../Product');
const DailyProduct = require('../DailyProduct');
const StockMovement = require('../StockMovement');
const ProductPrice = require('../ProductPrice');
const User = require('../User');

const ViewProduct = require('../view/ViewProduct');

// ViewProduct -> Category 
ViewProduct.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

// DailyProduct -> ViewProduct
DailyProduct.belongsTo(ViewProduct, { foreignKey: 'productId', as: 'product' });

// Category -> Product
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

// Product -> DailyProduct
Product.hasMany(DailyProduct, { foreignKey: 'productId' });
DailyProduct.belongsTo(Product, { foreignKey: 'productId' });

// Product -> StockMovement
Product.hasMany(StockMovement, { foreignKey: 'productId' });
StockMovement.belongsTo(Product, { foreignKey: 'productId' });

// Product -> ProductPrice
Product.hasMany(ProductPrice, { foreignKey: 'productId' });
ProductPrice.belongsTo(Product, { foreignKey: 'productId' });

module.exports = {
  Category,
  Product,
  DailyProduct,
  StockMovement,
  ProductPrice,
  User,
  ViewProduct
};
