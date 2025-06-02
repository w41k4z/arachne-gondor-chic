const routes = (app)=>{
    // Import and use your routes here
    require("./auth/AuthRoutes")(app);
    require("./product/ProductRoutes")(app);
}
module.exports = routes;