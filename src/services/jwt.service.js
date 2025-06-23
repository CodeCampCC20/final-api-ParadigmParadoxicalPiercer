import jwt from "jsonwebtoken";

const jwtService = {};

jwtService.genDocToken = (payload) => {
  return jwt.sign(payload, process.env.DOCTOR_JWT, {
    expiresIn: "1d",
    algorithm: "HS256",
  });
};

jwtService.verifyDocToken = (token) => {
  try {
    return jwt.verify(token, process.env.DOCTOR_JWT, { algorithms: ["HS256"] });
  } catch (error) {
    console.log("JWT verification error:", error);
  }
};

jwtService.genUserToken = (payload) => {
  return jwt.sign(payload, process.env.USER_JWT, {
    expiresIn: "1d",
    algorithm: "HS256",
  });
};

jwtService.verifyUserToken = (token) => {
  try {
    return jwt.verify(token, process.env.USER_JWT, { algorithms: ["HS256"] });
  } catch (error) {
    console.log("JWT verification error:", error);
  }
};
export default jwtService;
