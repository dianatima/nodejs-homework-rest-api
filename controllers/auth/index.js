const registration = require("./registration");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");
const login = require("./login");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");

module.exports = {
  registration,
  login,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
