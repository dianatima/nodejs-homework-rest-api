const express = require("express");
const { ctrlWrapper } = require("../../helpers");

const contactsController = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const schemas = require("../../shemas");

const router = express.Router();

router.get("/", isValidId, ctrlWrapper(contactsController.listContacts));

router.get(
  "/:contactId",
  isValidId,
  ctrlWrapper(contactsController.getContactById)
);

router.post(
  "/",
  validateBody(schemas.contactShema),
  ctrlWrapper(contactsController.addContact)
);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.contactShema),
  ctrlWrapper(contactsController.updateById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.contactUpdateFavoriteShema),
  ctrlWrapper(contactsController.updateFavorite)
);

router.delete(
  "/:contactId",
  isValidId,
  ctrlWrapper(contactsController.removeContact)
);

module.exports = router;
