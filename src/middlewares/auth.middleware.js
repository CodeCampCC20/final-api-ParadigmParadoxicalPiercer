import jwtService from "../services/jwt.service.js";
import { createError } from "../utils/createError.js";

export const authDocMiddleware = async (req, res, next) => {
  try {
    const authenHeader = req.headers.authorization;
    if (!authenHeader || !authenHeader.startsWith("Bearer ")) {
      createError(401, "Unauthorized");
    }

    const accessToken = authenHeader.split(" ")[1];
    console.log("accessToken", accessToken);

    if (!accessToken) {
      createError(401, "Unauthorized!!");
    }

    const payload = jwtService.verifyDocToken(accessToken);
    if (!payload) {
      createError(401, "Unauthorized!!");
    }

    console.log("payload", payload);

    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};

export const authUserMiddleware = async (req, res, next) => {
  console.log("authUserMiddleware req.body", req.body);
  try {
    const authenHeader = req.headers.authorization;
    if (!authenHeader || !authenHeader.startsWith("Bearer ")) {
      createError(401, "Unauthorized");
    }

    const accessToken = authenHeader.split(" ")[1];
    console.log("accessToken", accessToken);

    if (!accessToken) {
      createError(401, "Unauthorized!!");
    }

    const payload = jwtService.verifyUserToken(accessToken);
    if (!payload) {
      createError(401, "Unauthorized!!");
    }

    console.log("payload", payload);

    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
};
