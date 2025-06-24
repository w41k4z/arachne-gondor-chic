const express = require("express");
const router = express.Router();
const {avoirClient} =  require('../../controllers/ControlleurClients')
require("dotenv").config();

router.post("/rechercherClientparPseudo" , avoirClient)

module.exports = function (app) {
  const apiVersion = process.env.API_VERSION || "v1";
  app.use(`/api/${apiVersion}`, router);
};