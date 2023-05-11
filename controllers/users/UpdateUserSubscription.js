const User = require("../../models/user");
const { RequestError } = require("../../helpers");

const UpdateUserSubscription = async (req, res) => {
  if (!req.body) {
    throw RequestError(400, "Missing field subscription");
  }
  const { _id } = req.user;
  const { subscription } = req.body;

  const result = await User.findByIdAndUpdate(
    _id,
    { subscription },
    { new: true }
  );

  return res.status(200).json({ subscription: result.subscription });
};

module.exports = UpdateUserSubscription;
