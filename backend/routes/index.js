const routes = (app) => {
  // Import and use your routes here
  require("./auth/AuthRoutes")(app);
  app.use("/api/products", require("./product/ProductRoutes"));
};
module.exports = routes;
