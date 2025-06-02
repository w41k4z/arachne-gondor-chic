
module.exports = function (app) {
    const router = require("express").Router();
    dotenv = require('dotenv').config();
    
    // var userController=require('../../controllers/auth/UserController');


    // router.post("/register",userController.register);
    // router.post("/login",userController.login);
    // router.post("/logout",userController.logout);

    app.use("/api/"+(process.env.API_VERSION || 'v1'), router);

};
