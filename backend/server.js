const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/db');
const models = require('./models/relation/Model');

sequelize.sync({ alter: true })
  .then(() => console.log("Modèles synchronisés avec la base"))
  .catch(err => console.error("Erreur sync :", err));


const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json({limit: '25mb'}));

// CORS : n'autorise que le front indiqué dans .env
app.use(cors({
  origin: process.env.CORS_ORIGIN
}));

//Routes to be used
require("./routes/index")(app);

app.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers", 
        "Authorization, Origin, Content-Type, Accept"
    );
    next();
});

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
