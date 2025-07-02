const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User"); // Sequelize: destructure le modèle User
const { accessTokenExpiry, refreshTokenExpiry } = require("../../config/auth");

const ACCESS_SECRET = process.env.ACCESS_TOKEN_SECRET || "access_secret";
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET || "refresh_secret";

// Fonction pour générer les tokens
const generateTokens = (user) => {
  const payload = { userId: user.id, username: user.username };

  const accessToken = jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: accessTokenExpiry,
  });

  const refreshToken = jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: refreshTokenExpiry,
  });

  return {
    accessToken,
    refreshToken,
    accessTokenExpiry,
    refreshTokenExpiry,
  };
};

// Connexion
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res
      .status(401)
      .json({
        message: "Identifiants incorrects",
        payload: {},
        error: {},
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
      .status(401)
      .json({
        message: "Identifiants incorrects",
        payload: {},
        error: {},
      });
    }

    const tokens = generateTokens(user);

    return res.json({
      message: "",
      payload: {
        token: tokens.accessToken,
        refreshToken: tokens.refreshToken,
        expires_in: tokens.accessTokenExpiry,
        refresh_expires_in: tokens.refreshTokenExpiry,
        token_type: "Bearer",
        scope: user.username,
      },
      error: {},
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Erreur serveur", error: err.message });
  }
};

// Rafraîchir le token d'accès
const refresh = (req, res) => {
  // Récupère le refresh token depuis le cookie
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    return res.status(400).json({
      message: "Refresh token manquant",
      payload: {},
      error: {},
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
    const newAccessToken = jwt.sign(
      { userId: decoded.userId, username: decoded.username },
      ACCESS_SECRET,
      { expiresIn: accessTokenExpiry }
    );

    return res.status(200).json({
      message: "",
      payload: {
        new_access_token: newAccessToken,
        expires_in: accessTokenExpiry,
        token_type: "Bearer",
        scope: decoded.username,
      },
      error: {},
    });
  } catch (err) {
    console.log(err.message);
    return res.status(401).json({
      message: "Refresh token invalide ou expiré",
      payload: {},
      error: {},
    });
  }
};

module.exports = { login, refresh };
