import prisma from "../configs/prisma.js";

const userService = {};

userService.updateUserbyId = async (id, data) => {
  const { username, password } = data;
  return prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      username: username,
      password: password,
    },
    select: {
      id: true,
      username: true,
    },
  });
};
userService.findUserbyId = async (id) => {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      username: true,
    },
  });
};

export default userService;
