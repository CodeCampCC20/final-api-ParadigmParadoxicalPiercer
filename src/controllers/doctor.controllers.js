import doctorService from "../services/doctor.service.js";

export const doctorControllerGetMe = async (req, res, next) => {
  try {
    const { id } = req.user;
    const me = await doctorService.findDoctorbyId(id);

    res.json({
      id: me.id,
      username: me.username,
      specialization: me.specialization,
    });
  } catch (error) {
    next(error);
  }
};

export const docControllerUpdateMe = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { username, password, specialization } = req.body;
    console.log(username, password);
    const me = await doctorService.updateDoctorbyId(id, {
      username,
      password,
      specialization,
    });

    res.json({
      id: me.id,
      username: me.username,
      specialization: me.specialization,
    });
  } catch (error) {
    next(error);
  }
};
