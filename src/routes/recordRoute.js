import express from "express";
import { authUserMiddleware } from "../middlewares/auth.middleware.js";
import {
  healthRecordControllerCreate,
  healthRecordControllerGetByUserId,
} from "../controllers/healthRecord.controllers.js";

const router = express.Router();

// Health Records routes - ต้อง validate user authentication
// Base route: http://localhost:8383/health-records

router.post("/", authUserMiddleware, healthRecordControllerCreate);
router.get("/", authUserMiddleware, healthRecordControllerGetByUserId);

export default router;
