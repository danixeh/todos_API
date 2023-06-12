const setUpRoutes = require("./setup.routes");
const userRoutes = require("./users.routes");
const purchaseRoutes = require("./purchase.routes");

const apiRoutes = (app) => {
  app.use(setUpRoutes);
  app.use(userRoutes);
  app.use(purchaseRoutes);
};

module.exports = apiRoutes;
