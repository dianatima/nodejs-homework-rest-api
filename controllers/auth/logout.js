const User = require("../../models/user");

const logout = async (req, res) => {
  const { user } = req;
  const { _id } = user;
  await User.findByIdAndUpdate(_id, { token: "" });
  res.status(204, "No Content").json();
};

module.exports = logout;
