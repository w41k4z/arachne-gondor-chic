const Category = require('../Category');
const Product = require('../Product');
const Produit = require('../Produit');
const DailyProduct = require('../DailyProduct');
const StockMovement = require('../StockMovement');
const ProductPrice = require('../ProductPrice');
const User = require('../User');
const Client = require('../Client');

const ViewProduct = require('../view/ViewProduct');

// ViewProduct -> Category 
ViewProduct.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

// DailyProduct -> ViewProduct
DailyProduct.belongsTo(ViewProduct, { foreignKey: 'productId', as: 'product' });

module.exports = {
  Category,
  Product,
  Produit,
  DailyProduct,
  StockMovement,
  ProductPrice,
  User,
  ViewProduct,
  Client
};
