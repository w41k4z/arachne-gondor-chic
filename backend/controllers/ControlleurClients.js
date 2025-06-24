const clientManager = require("../services/clientsServices/clientsManager");

async function avoirClient(req , res) {
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

module.exports = {avoirClient}