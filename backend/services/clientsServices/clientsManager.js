const { Client, Produit } = require("../../models/relation/Model");

async function rechercherClientparPseudo(pseudo, motDePasse) {
  return await Client.findOne({ where: { pseudo, motDePasse } });
}

async function AjouterAuPanier(idClient, idProduit, quantite) {
  const produit = await Produit.findOne({ where: { id: idProduit } });

  if (!produit) {
    return {
      success: false,
      message: "Produit non trouvé",
      payload: null,
    };
  }

  if (produit.quantiteEnStock >= quantite) {
    produit.quantiteEnStock -= quantite;
    const produitMisAJour = await produit.save();

    // Optionnel : enregistrer aussi dans une table "Panier" ici

    return {
      success: true,
      message: "Produit ajouté au panier",
      payload: produitMisAJour,
    };
  } else {
    return {
      success: false,
      message: "Quantité en stock insuffisante",
      payload: null,
    };
  }
}

module.exports = { rechercherClientparPseudo, AjouterAuPanier };
