import express from "express";
import { authDocMiddleware } from "../middlewares/auth.middleware.js";
import {
  docControllerUpdateMe,
  doctorControllerGetMe,
} from "../controllers/doctor.controllers.js";

const docRouter = express.Router();

//endpoint http://8383/auth for authentication
// router.post("/register/doctor", validate(registerDoctorSchema), registerDoc);
// router.post("/login/doctor", validate(loginSchema), loginDoc);
// router.post("/register/user", validate(registerUserSchema), registerUser);
// router.post("/login/user", validate(loginSchema), loginUser);
//users
docRouter.get("/me", authDocMiddleware, doctorControllerGetMe);
docRouter.patch("/me", authDocMiddleware, docControllerUpdateMe);

// router.get("");

//export
export default docRouter;
