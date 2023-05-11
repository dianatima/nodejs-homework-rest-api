const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const controller = require("../../controllers/users");
const { auth } = require("../../middlewares");

const router = express.Router();

router.post("", ctrlWrapper(auth), ctrlWrapper(controller.addContact));
router.post(
  "/contacts",
  ctrlWrapper(auth),
  ctrlWrapper(controller.getContacts)
);
router.get(
  "/current",
  ctrlWrapper(auth),
  ctrlWrapper(controller.getCurrentUser)
);
router.patch(
  "/subscription",
  ctrlWrapper(auth),
  ctrlWrapper(controller.UpdateUserSubscription)
);

module.exports = router;
