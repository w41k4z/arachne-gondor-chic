const Produit = require('../../models/Produit');

async function rechercherProduitDuJour() {
  return await Produit.findOne({
    where: { estDuJour: true }
  });
}

module.exports = {
  rechercherProduitDuJour,
};
