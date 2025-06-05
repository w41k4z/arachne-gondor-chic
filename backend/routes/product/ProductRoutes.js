const express = require("express");
const router = express.Router();
const { getDailyProducts } = require('../../controllers/product/ProductController');
require("dotenv").config();

router.get("/daily-products" , getDailyProducts)

module.exports = function (app) {
  const apiVersion = process.env.API_VERSION || "v1";
  app.use(`/api/${apiVersion}`, router);
};