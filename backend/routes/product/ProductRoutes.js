const router = require("express").Router();
const productController = require('../../controllers/product/ProductController')

router.get('/daily-products' , productController.getDailyProducts)

module.exports = router