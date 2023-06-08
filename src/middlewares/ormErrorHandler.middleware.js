const {
  ValidationError,
  DatabaseError,
  ConnectionAcquireTimeoutError,
  ConnectionError,
  ConnectionRefusedError,
  InvalidConnectionError,
  ConnectionTimedOutError,
} = require("sequelize");

const ormErrorHandler = (err, req, res, next) => {
  if (
    err instanceof ConnectionError ||
    err instanceof ConnectionAcquireTimeoutError ||
    err instanceof ConnectionRefusedError ||
    err instanceof ConnectionTimedOutError ||
    err instanceof InvalidConnectionError
  ) {
    res.status(409).json({
      name: err.name,
      message: "Database connection ",
    });
  }
  if (err instanceof ValidationError) {
    return res.status(400).json({
      name: err.name,
      message: err.message,
      errors: err.errors,
    });
  }
  if (err instanceof DatabaseError) {
    return res.status(409).json({
      name: err.name,
      message: err.message,
      errors: err.errors,
    });
  }
  next(err);
};

module.exports = ormErrorHandler;
