import prisma from "../configs/prisma.js";

const HealthRecordService = {};

HealthRecordService.createHealthRecordbyUserId = async (id, data) => {
  const { type, value } = data;
  return prisma.healthRecord.create({
    data: {
      userId: Number(id),
      type: type,
      value: value,
    },
  });
};

HealthRecordService.findAllHealthRecordsByUserId = async (id) => {
  return prisma.healthRecord.findMany({
    where: {
      userId: id,
    },
    select: {
      id: true,
      userId: true,
      type: true,
      value: true,
      date: true,
    },
  });
};

export default HealthRecordService;

// HealthRecordService.findHealthRecordById = async (id) => {
//   return prisma.healthRecord.findUnique({
//     where: {
//       id: Number(id),
//     },
//     select: {
//       id: true,
//       userId: true,
//       type: true,
//       value: true,
//       date: true,
//     },
//   });
// };???
