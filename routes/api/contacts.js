const express = require("express");

const contactsController = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../shemas");

const router = express.Router();

router.get("/", contactsController.listContacts);

router.get("/:contactId", contactsController.getContactById);

router.post(
  "/",
  validateBody(schemas.contactShema),
  contactsController.addContact
);

router.put(
  "/:contactId",
  validateBody(schemas.contactShema),
  contactsController.updateById
);

router.delete("/:contactId", contactsController.removeContact);

module.exports = router;
