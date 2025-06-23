import prisma from "../configs/prisma.js";

const authUserService = {};

authUserService.findUserByUsername = async (username) => {
  return prisma.user.findFirst({
    where: {
      username: username,
    },
  });
};

authUserService.createUser = async (data) => {
  return prisma.user.create({ data });
};

export default authUserService;
