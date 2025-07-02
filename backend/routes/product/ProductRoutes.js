const express = require("express");
const router = express.Router();
const { produitDuJour } = require('../../controllers/ControlleurProduits');
require("dotenv").config();

router.get("/daily-products" , produitDuJour)

module.exports = function (app) {
  const apiVersion = process.env.API_VERSION || "v1";
  app.use(`/api/${apiVersion}`, router);
};
