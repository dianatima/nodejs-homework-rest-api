const Contact = require("../../models/contact");
const RequestError = require("../../helpers");

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    message: "Delete success",
  });
};

module.exports = removeContact;
