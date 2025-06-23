import authDocService from "../services/auth.doc.service";
import jwtService from "../services/jwt.service";

const authDocMiddleware = async (req, res, next) => {
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
    if (!accessToken) {
      createError(401, "Unauthorized!!");
    }

    console.log("payload", payload);

    const user = await authDocService.findDocByUsername(payload.id);
    if (!user) {
      createError(401, "Unauthorized!!!!");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default authDocMiddleware;
