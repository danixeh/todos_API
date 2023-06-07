const errorHandler = (err, req, res, next) => {
  // destructuring function for status
  const { status } = err;
  return res.status(status || 500).json({
    errorName: err.name,
    message: err.message,
  });
};

module.exports = errorHandler;

// token expired
