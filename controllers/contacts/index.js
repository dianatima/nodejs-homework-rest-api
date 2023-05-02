const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateById = require("./updateById");
const updateFavorite = require("./updateFavorite");
const removeContact = require("./removeContact");

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateById,
  removeContact,
  updateFavorite,
};
