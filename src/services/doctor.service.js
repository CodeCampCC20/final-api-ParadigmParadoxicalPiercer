import prisma from "../configs/prisma.js";

const doctorService = {};

doctorService.updateDoctorbyId = async (id, data) => {
  const { username, password, specialization } = data;
  return prisma.doctor.update({
    where: {
      id: Number(id),
    },
    data: {
      username: username,
      password: password,
      specialization: specialization,
    },
    select: {
      id: true,
      username: true,
      specialization: true,
    },
  });
};
doctorService.findDoctorbyId = async (id) => {
  return prisma.doctor.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      username: true,
      specialization: true,
    },
  });
};

export default doctorService;
