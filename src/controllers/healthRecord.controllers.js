import HealthRecordService from "../services/healthRecord.service.js";
import { createError } from "../utils/createError.js";

export const healthRecordControllerCreate = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { type, value } = req.body;

    const healthRecord = await HealthRecordService.createHealthRecordbyUserId(
      id,
      { type, value }
    );

    return res.status(201).json({
      id: healthRecord.id,
      message: "Health record created successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const healthRecordControllerGetByUserId = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const healthRecords =
      await HealthRecordService.findAllHealthRecordsByUserId(userId);
    return res.status(200).json(healthRecords);
  } catch (error) {
    next(error);
  }
};
