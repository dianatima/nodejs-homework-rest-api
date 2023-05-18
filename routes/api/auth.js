const express = require("express");
const { ctrlWrapper } = require("../../helpers");
const controller = require("../../controllers/auth");
const { auth, upload } = require("../../middlewares");
const { validateBody } = require("../../middlewares");
const schemas = require("../../shemas");

const router = express.Router();

router.post("/registration", ctrlWrapper(controller.registration));
router.get("/verify/:verificationToken", ctrlWrapper(controller.verifyEmail));
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  ctrlWrapper(controller.resendVerifyEmail)
);
router.post("/login", ctrlWrapper(controller.login));
router.post("/logout", ctrlWrapper(auth), ctrlWrapper(controller.logout));
router.patch(
  "/avatars",
  ctrlWrapper(auth),
  upload.single("avatar"),
  ctrlWrapper(controller.updateAvatar)
);

module.exports = router;
