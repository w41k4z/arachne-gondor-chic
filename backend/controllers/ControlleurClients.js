const clientManager = require("../services/clientsServices/clientsManager");

async function ajouterPanier(req, res) {
  const { idClient, idProduit, quantite } = req.query;
  try {
    const reponse = await clientManager.AjouterAuPanier(
      idClient,
      idProduit,
      quantite
    );
    if (reponse.success) {
      return res.json({ message: "", payload: reponse.payload });
    } else {
      return res.json({ message: reponse.message, payload: null });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error.message });
  }
}

async function avoirClient(req, res) {
  const { pseudo, motDePasse } = req.body;
  try {
    const reponse = await clientManager.rechercherClientparPseudo(
      pseudo,
      motDePasse
    );
    if (!reponse) {
      return res.json({
        message: "Aucun client trouvé",
        payload: reponse,
        error: {},
      });
    }
    return res.json({
      message: "",
      payload: reponse,
      error: {},
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error.message });
  }
}

module.exports = { avoirClient, ajouterPanier };
