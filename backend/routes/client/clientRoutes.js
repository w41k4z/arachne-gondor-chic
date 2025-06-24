const express = require("express");
const router = express.Router();
const {
  avoirClient,
  ajouterPanier,
} = require("../../controllers/ControlleurClients");
require("dotenv").config();

router.post("/rechercherClientparPseudo", avoirClient);
router.get("/ajouterPanier" , ajouterPanier);

module.exports = function (app) {
  const apiVersion = process.env.API_VERSION || "v1";
  app.use(`/api/${apiVersion}`, router);
};
