const errorHandler = require("../middlewares/errorHandler.middleware");
const logError = require("../middlewares/logError.middleware");
const ormErrorHandler = require("../middlewares/ormErrorHandler.middleware");

const errorRoutes = (app) => {
  app.use(logError); // we show the error
  app.use(ormErrorHandler); // if its an orm error handler
  app.use(errorHandler);

  app.use("*", (req, res) => {
    res.status(404).json({
      message: "backend is working we will see you soon",
    });
  });
};

module.exports = errorRoutes;
