const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;
const sequelize = require('./config/db');

// Test de connexkon à postgreSQL
sequelize.authenticate()
  .then(() => console.log('✅ Connexion à PostgreSQL réussie.'))
  .catch(err => console.error('❌ Échec de la connexion à la BDD:', err));

//Middleware pour paerser le JSON
app.use(express.json({limit: '25mb'}));

//Middleware pour paerser les cookies
app.use(cookieParser());

// CORS : n'autorise que le front indiqué dans .env
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // ou une liste précise de domaines autorisés
    allowedHeaders: ["Authorization", "Origin", "Content-Type", "Accept"],
    credentials: true // Pour autoriser les cookies cross-origin
  })
);

//Routes to be used
require("./routes/index")(app);

// app.use(function (req, res, next) {
//     res.header(
//         "Access-Control-Allow-Headers", 
//         "Authorization, Origin, Content-Type, Accept"
//     );
//     next();
// });

app.use((req, res, next) => {
  res.status(404).json({ message: "Route non trouvée" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Erreur serveur" });
});

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
