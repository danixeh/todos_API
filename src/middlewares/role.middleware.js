const isAdmin = (req, res, next) => {
  const { username, rolId } = req.user;
  if (rolId !== 3) {
    return next(console.log(error), {
      status: 401,
      name: `${rolId} is not admin`,
      message: "only admin allowed",
    });
  }
  next();
};

const hasRoles = (...roles) => {
  // return a middleware function
  return (req, res, next) => {
    const { rolId } = req.user;
    if (!roles.includes(rolId)) {
      next({
        status: 401,
        name: "role required",
        message: `user has not required permissions`,
      });
    }
    next();
  };
};

module.exports = { hasRoles, isAdmin };
