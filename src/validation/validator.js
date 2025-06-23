import { object, ref, string } from "yup";

export const registerDoctorSchema = object({
  username: string()
    .min(6, "กรุณากรอก username อย่างน้อย 6 ตัวอักษร")
    .required("ห้ามเว้นว่าง"),
  password: string()
    .min(6, "กรุณากรอกรหัสผ่านความยาวอย่างน้อย6ตัวอักษร")
    .required("ห้ามเว้นว่าง"),
  confirmPassword: string()
    .required("กรุณายืนยันรหัสผ่าน")
    .oneOf([ref("password")], "รหัสผ่านไม่ตรงกัน"),
  specialization: string().max(100, "กรุณากรอกไม่เกิน 100 ตัวอักษร"),
});

export const registerUserSchema = object({
  username: string()
    .min(6, "กรุณากรอก username อย่างน้อย 6 ตัวอักษร")
    .required("ห้ามเว้นว่าง"),
  password: string()
    .min(6, "กรุณากรอกรหัสผ่านความยาวอย่างน้อย6ตัวอักษร")
    .required("ห้ามเว้นว่าง"),
  confirmPassword: string()
    .required("กรุณายืนยันรหัสผ่าน")
    .oneOf([ref("password")], "รหัสผ่านไม่ตรงกัน"),
});

export const loginSchema = object({
  username: string()
    .min(6, "กรุณากรอก username อย่างน้อย 6 ตัวอักษร")
    .required("ห้ามเว้นว่าง"),
  password: string()
    .min(6, "กรุณากรอกรหัสผ่านความยาวอย่างน้อย6ตัวอักษร")
    .required("ห้ามเว้นว่าง"),
});

export const validate = (schema) => async (req, res, next) => {
  //code body
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTXT = errMsg.join(", ");
    console.log(errTXT);
    const mergeErr = new Error(errTXT);
    next(mergeErr);
  }
};
