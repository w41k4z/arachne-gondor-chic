const routes = (app) => {
  // Import and use your routes here
  require("./product/ProductRoutes")(app)
  require('./client/clientRoutes')(app)
};
module.exports = routes;
