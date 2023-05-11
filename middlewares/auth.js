const { RequestError } = require("../helpers");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

dotenv.config();

const { JWT_SECRET } = process.env;

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  const [type, token] = authHeader.split(" ");
  if (type !== "Bearer") {
    throw RequestError(401, "Token type is not valid");
  }
  if (!token) {
    throw RequestError(401, "No token provided");
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(RequestError(401));
    }
    req.user = user;
  } catch (error) {
    if (
      error.name === "TokenExpiredError" ||
      error.name === "JsonwebtokenError"
    ) {
      throw RequestError(401, "No token provided");
    }
  }
  next();
};

module.exports = auth;
