const express = require("express");
const router = express.Router();
const { login, refresh } = require("../../controllers/auth/AuthController");
require("dotenv").config(); // assure que les variables d'env sont chargées

// Routes publiques
router.post("/login", login);
router.post("/refresh", refresh);

// Export d'une fonction prenant app en paramètre
module.exports = function (app) {
  const apiVersion = process.env.API_VERSION || "v1";
  app.use(`/api/${apiVersion}`, router);
};
