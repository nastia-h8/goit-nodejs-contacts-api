import express from "express";

import authController from "../../controllers/users-controller.js";
import { authenticate, isEmptyBody } from "../../middlewars/index.js";
import { validateBody } from "../../decorators/index.js";
import {
  userLoginSchema,
  userRegisterSchema,
  userSubscriptionSchema,
} from "../../schemas/users-schemas.js";

const usersRouter = express.Router();

usersRouter.post(
  "/register",
  isEmptyBody,
  validateBody(userRegisterSchema),
  authController.register
);

usersRouter.post(
  "/login",
  isEmptyBody,
  validateBody(userLoginSchema),
  authController.login
);

usersRouter.get("/current", authenticate, authController.getCurrent);
usersRouter.post("/logout", authenticate, authController.logout);
usersRouter.patch(
  "/subscription",
  authenticate,
  isEmptyBody,
  validateBody(userSubscriptionSchema),
  authController.subscription
);

export default usersRouter;
