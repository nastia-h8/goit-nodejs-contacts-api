import Joi from "joi";

export const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Missing required name field",
    "string.base": "Name must be text",
  }),
  email: Joi.string().required().messages({
    "any.required": "Missing required email field",
    "string.base": "Email must be text",
  }),
  phone: Joi.string().required().messages({
    "any.required": "Missing required phone field",
    "string.base": "Phone must be text",
  }),
  favorite: Joi.boolean(),
});

export const contactUpdateSchema = Joi.object({
  name: Joi.string().messages({
    "string.base": "Name must be text",
  }),
  email: Joi.string().messages({
    "string.base": "Email must be text",
  }),
  phone: Joi.string().messages({
    "string.base": "Phone must be text",
  }),
  favorite: Joi.boolean(),
});

export const contactFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "Missing required field favorite",
    "boolean.base": "Favorite must be boolean type",
  }),
});
