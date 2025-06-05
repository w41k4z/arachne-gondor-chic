require("dotenv").config();
const jwt = require("jsonwebtoken");

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_secret";

// Middleware de vérification du token d'accès
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // insensible à la casse

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Accès refusé - Token manquant ou mal formé",
      redirect: "/login",
    });
  }

  const token = authHeader.split(" ")[1]; // plus clair et sûr

  try {
    const decoded = jwt.verify(token, ACCESS_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Session expirée. Veuillez vous reconnecter",
      redirect: "/login",
      error: err.message
    });
  }
};

module.exports = { authMiddleware };
