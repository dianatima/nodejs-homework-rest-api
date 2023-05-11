const User = require("../../models/user");

const addContact = async (req, res) => {
  const { user } = req;
  const { id: contactID } = req.body;

  user.contacts.push(contactID);
  const updatedContact = await User.findByIdAndUpdate(user._id, user, {
    new: true,
  });
  res.json({ contacts: updatedContact.contacts });
};

module.exports = addContact;
