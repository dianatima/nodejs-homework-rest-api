const Contact = require("../../models/contact");
const RequestError = require("../../helpers");

const updateFavorite = async (req, res, next) => {
  if (!req.body) {
    throw RequestError(400, "Missing field favorite");
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  return res.status(200).json(result);
};

module.exports = updateFavorite;
