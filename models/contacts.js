const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const contactsList = await listContacts();
  const result = contactsList.find((item) => item.id === contactId);
  return result || null;
};

const addContact = async (data) => {
  const { name, email, phone } = data;
  const contactsList = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contactsList.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  return newContact;
};

const updateById = async (contactId, data) => {
  const contactsList = await listContacts();
  const index = contactsList.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  contactsList[index] = { id: contactId, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  return contactsList[index];
};

const removeContact = async (contactId) => {
  const contactsList = await listContacts();
  const index = contactsList.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contactsList.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateById,
  removeContact,
};
