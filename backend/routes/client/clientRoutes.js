const express = require("express");
const router = express.Router();
const {
  leClientIdentifie,
  ajouterPanier,
} = require("../../controllers/SessionPasserCde");
require("dotenv").config();

router.post("/rechercherClientparPseudo", leClientIdentifie);
router.get("/ajouterPanier" , ajouterPanier);

module.exports = function (app) {
  const apiVersion = process.env.API_VERSION || "v1";
  app.use(`/api/${apiVersion}`, router);
};
