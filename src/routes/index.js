const postRoutes = require("./post.routes");
const userRoutes = require("./users.routes");

const apiRoutes = (app) => {
  app.use(postRoutes);
  app.use(userRoutes);
};

module.exports = apiRoutes;
