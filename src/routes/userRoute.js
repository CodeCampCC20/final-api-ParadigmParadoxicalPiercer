import express from "express";
import { authUserMiddleware } from "../middlewares/auth.middleware.js";

import {
  userControllerGetMe,
  userControllerUpdateMe,
} from "../controllers/user.controllers.js";

const userRouter = express.Router();

//endpoint http://8383/auth for authentication
// router.post("/register/doctor", validate(registerDoctorSchema), registerDoc);
// router.post("/login/doctor", validate(loginSchema), loginDoc);
// router.post("/register/user", validate(registerUserSchema), registerUser);
// router.post("/login/user", validate(loginSchema), loginUser);
//users
userRouter.get("/me", authUserMiddleware, userControllerGetMe);
userRouter.patch("/me", authUserMiddleware, userControllerUpdateMe); //put content-type application/json in postman

// router.get("");

//export
export default userRouter;
