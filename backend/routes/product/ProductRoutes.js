const express = require("express");
const router = express.Router();
const { leProduitCourant } = require('../../controllers/SessionPasserCde');
require("dotenv").config();

router.get("/daily-products" , leProduitCourant)

module.exports = function (app) {
  const apiVersion = process.env.API_VERSION || "v1";
  app.use(`/api/${apiVersion}`, router);
};
