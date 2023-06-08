// wjt to decode the token

const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.headers["access-token"];

    if (!token) {
      return next({
        status: 401,
        name: "there is not key token",
        message: "cat out of token",
      });
    }
    // if there are token
    // we will need the token, the secret and
    const decoded = jwt.verify(token, "unodostres", {
      algorithms: "HS512",
    });
    req.user = decoded;
    next();
  } catch (error) {
    next({
      status: 498,
      name: "invalid or spired token",
      message: "cat without token",
    });
  }
};

module.exports = authenticate;
