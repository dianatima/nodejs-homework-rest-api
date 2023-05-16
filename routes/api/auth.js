const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const controller = require("../../controllers/auth");
const { auth, upload } = require("../../middlewares");

const router = express.Router();

router.post("/registration", ctrlWrapper(controller.registration));
router.post("/login", ctrlWrapper(controller.login));
router.post("/logout", ctrlWrapper(auth), ctrlWrapper(controller.logout));
router.patch(
  "/avatars",
  ctrlWrapper(auth),
  upload.single("avatar"),
  ctrlWrapper(controller.updateAvatar)
);

module.exports = router;
