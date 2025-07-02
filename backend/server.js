const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;

//Middleware pour paerser le JSON
app.use(express.json());

//Middleware pour paerser les cookies
app.use(cookieParser());

// CORS : n'autorise que le front indiqué dans .env
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // ou une liste précise de domaines autorisés
    allowedHeaders: ["Authorization", "Origin", "Content-Type", "Accept"],
    credentials: true // Pour autoriser les cookies cross-origin
  })
);

//Routes to be used
require("./routes/index")(app);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route non trouvée" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erreur serveur" });
});

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
