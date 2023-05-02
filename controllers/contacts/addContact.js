const Contact = require("../../models/contact");

const addContact = async (req, res, next) => {
  const result = await Contact.create(req.body);
  return res.status(201).json(result);
};

module.exports = addContact;
