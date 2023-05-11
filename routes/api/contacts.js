const express = require("express");
const { ctrlWrapper } = require("../../helpers");

const contactsController = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const schemas = require("../../shemas");

const router = express.Router();
const { auth } = require("../../middlewares");

router.get(
  "/",
  ctrlWrapper(auth),
  ctrlWrapper(contactsController.listContacts)
);

router.get(
  "/:contactId",
  ctrlWrapper(auth),
  isValidId,
  ctrlWrapper(contactsController.getContactById)
);

router.post(
  "/",
  ctrlWrapper(auth),
  validateBody(schemas.contactShema),
  ctrlWrapper(contactsController.addContact)
);

router.put(
  "/:contactId",
  ctrlWrapper(auth),
  isValidId,
  validateBody(schemas.contactShema),
  ctrlWrapper(contactsController.updateById)
);

router.patch(
  "/:contactId/favorite",
  ctrlWrapper(auth),
  isValidId,
  validateBody(schemas.contactUpdateFavoriteShema),
  ctrlWrapper(contactsController.updateFavorite)
);

router.delete(
  "/:contactId",
  ctrlWrapper(auth),
  isValidId,
  ctrlWrapper(contactsController.removeContact)
);

module.exports = router;
