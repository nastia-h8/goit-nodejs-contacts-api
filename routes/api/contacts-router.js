import express from "express";

import contactsController from "../../controllers/contacts-controller.js";
import { isEmptyBody } from "../../middlewars/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  contactAddSchema,
  contactUpdateSchema,
} from "../../schemas/contacts-schemas.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.get("/:id", contactsController.getContactById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactAddSchema),
  contactsController.addContact
);

contactsRouter.delete("/:id", contactsController.removeContact);

contactsRouter.put(
  "/:id",
  isEmptyBody,
  validateBody(contactUpdateSchema),
  contactsController.updateContact
);

export default contactsRouter;
