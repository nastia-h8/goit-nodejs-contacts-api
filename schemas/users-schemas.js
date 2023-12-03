import Joi from "joi";
import { emailRegex } from "../validation/emailRegex.js";

export const userRegisterSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required().messages({
    "any.required": "Missing required email field",
    "string.base": "Email must be text",
    "string.pattern.base": "Entered email is not valid",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Missing required password field",
    "string.base": "Password must be text",
  }),
  subscription: Joi.string().valid("starter", "pro", "business"),
});

export const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required().messages({
    "any.required": "Missing required email field",
    "string.base": "Email must be text",
    "string.pattern.base": "Entered email is not valid",
  }),
  password: Joi.string().min(6).required().messages({
    "any.required": "Missing required password field",
    "string.base": "Password must be text",
  }),
});

export const userSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .required()
    .valid("starter", "pro", "business")
    .messages({
      "any.required": "Missing required field subscription",
      "string.base": "Unknown subscription type",
    }),
});
