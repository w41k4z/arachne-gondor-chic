const Client = require("../../models/Client");

async function rechercherClientparPseudo(pseudo, motDePasse) {
  return await Client.findOne({ where: { pseudo, motDePasse } });
}

module.exports = { rechercherClientparPseudo };
