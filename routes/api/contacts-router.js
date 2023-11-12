import express from "express";

import contactsController from "../../controllers/contacts-controller.js";
import { isEmptyBody } from "../../middlewars/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.get("/:id", contactsController.getContactById);

contactsRouter.post("/", isEmptyBody, contactsController.addContact);

contactsRouter.delete("/:id", contactsController.removeContact);

contactsRouter.put("/:id", isEmptyBody, contactsController.updateContact);

export default contactsRouter;
