import prisma from "../configs/prisma.js";

const authDocService = {};

authDocService.findDocByUsername = async (username) => {
  return prisma.doctor.findFirst({
    where: {
      username: username,
    },
  });
};

authDocService.createDoctor = async (data) => {
  return prisma.doctor.create({ data });
};

export default authDocService;
