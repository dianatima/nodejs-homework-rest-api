const Joi = require("joi");

const contactShema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const emailSchema = Joi.object({
  email: Joi.string().required(),
});

const contactUpdateFavoriteShema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  contactShema,
  contactUpdateFavoriteShema,
  emailSchema,
};
