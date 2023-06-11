// npm i express equelize pg pg-hstore
// npm i nodemon
// 2 step: install nodemon for do hot reload
// comments for reastart
const express = require("express");
require("dotenv").config(); // Start with require is equal to import and execute (only for this)
const initModels = require("./models/initModels");
initModels();

const db = require("./utils/database.js");
const Todos = require("./models/users.models.js");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler.middleware");
const logError = require("./middlewares/logError.middleware");
const ormErrorHandler = require("./middlewares/ormErrorHandler.middleware");
const apiRoutes = require("./routes");
const errorRoutes = require("./routes/errors.routes");
const transporter = require("./utils/mailer");
const PORT = process.env.PORT || 8000;

// temporally

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

db.sync() // if any table does not exist, it will create it, if not does not do anything.
  // { force: true } within db.sync() will erase and rewrite all. its only by apply once time.
  .then(() => console.log("Database synchronized"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());

app.use(express.json());

apiRoutes(app);

errorRoutes(app);

app.listen(PORT, () => {
  console.log(`server running on ${PORT} Port`);
});

//* in order to select just some columns...
// app.get("/api/v1/todos", async (req, res, next) => {
//   try {
//     const todos = await Todos.findAll({
//       attributes: ["title", "description"],
//     });
//     res.json(todos);
//   } catch (error) {
//     next(error);
//   }
// });

//* if i need to exclude some columns
// app.get("/api/v1/todos", async (req, res, next) => {
//   try {
//     const todos = await Todos.findAll({
//       // fin all is similar to select ... from
//       attributes: { exclude: ["id"] },
//     });
//     res.json(todos);
//   } catch (error) {
//     next(error);
//   }
// });

// app.get("/api/v1/todos", async (req, res, next) => {
//   try {
//     const todos = await Todos.findAll();
//     res.json(todos);
//   } catch (error) {
//     next(error);
//   }
// });
