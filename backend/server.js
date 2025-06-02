const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json({limit: '25mb'}));

app.use(cors());

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
