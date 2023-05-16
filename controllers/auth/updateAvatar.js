const User = require("../../models/user");
const { RequestError } = require("../../helpers");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  if (!originalname) {
    throw RequestError(400, "File is require!");
  }
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, filename);

  //await fs.rename(tempUpload, resultUpload);

  Jimp.read(tempUpload, (err, img) => {
    if (err) throw err;
    img
      .resize(250, 250) // resize
      .quality(60) // set JPEG quality
      .greyscale() // set greyscale
      .write(resultUpload); // save
  });
  await fs.unlink(tempUpload);

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.json({ avatarURL });
};
module.exports = updateAvatar;
