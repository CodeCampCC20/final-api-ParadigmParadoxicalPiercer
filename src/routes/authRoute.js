import express from "express";
import {
  loginSchema,
  registerDoctorSchema,
  registerUserSchema,
  validate,
} from "../validation/validator.js";
import {
  loginDoc,
  loginUser,
  registerDoc,
  registerUser,
} from "../controllers/auth.controllers.js";
const router = express.Router();

//endpoint http://8383/auth for authentication
router.post("/register/doctor", validate(registerDoctorSchema), registerDoc);
router.post("/login/doctor", validate(loginSchema), loginDoc);
router.post("/register/user", validate(registerUserSchema), registerUser);
router.post("/login/user", validate(loginSchema), loginUser);
//users
// router.get("/users/me", auth);

// router.get("");

//export
export default router;
