import prisma from "../configs/prisma.js";
import authDocService from "../services/auth.doc.service.js";
import hashService from "../services/hash.service.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import jwtService from "../services/jwt.service.js";
import authUserService from "../services/auth.user.service.js";

export const registerDoc = async (req, res, next) => {
  try {
    //check body
    console.log(req.body);
    const { username, password, specialization } = req.body;

    //check username
    const existDoctor = await authDocService.findDocByUsername(username);

    console.log(existDoctor);
    //if exist, return error
    if (existDoctor) {
      createError(400, "This doctor username already exist");
    }
    //encrypt password if create success
    const hashDoctor = hashService.hashPassword(password);
    console.log(hashDoctor);

    //then save to database
    const result = await prisma.doctor.create({
      data: {
        username: username,
        password: password,
        specialization: specialization,
      },
    });

    res.json({
      message: `Register Doctor Username: ${result.username} Successfully`,
    });
  } catch (error) {
    next(error);
  }
};

export const loginDoc = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    //check username
    const existDoctor = await authDocService.findDocByUsername(username);

    console.log(existDoctor);
    if (!existDoctor) {
      createError(400, "Username invalid");
    }

    //check password
    const matchDocPassword = hashService.comparePassword(
      password,
      existDoctor.password
    );
    console.log("matchDocPassword", matchDocPassword);

    const payload = { id: existDoctor.id };

    const docToken = jwtService.genDocToken(payload);
    console.log("docToken", docToken);

    res.status(200).json({ success: true, docToken });
  } catch (error) {
    next(error);
  }
};

export const registerUser = async (req, res, next) => {
  try {
    //check body
    console.log(req.body);
    const { username, password } = req.body;

    //check username
    const existUser = await authUserService.findUserByUsername(username);

    console.log(existUser);
    //if exist, return error
    if (existUser) {
      createError(400, "This username already exist");
    }
    //encrypt password if create success
    const hashUser = hashService.hashPassword(password);
    console.log(hashUser);

    //then save to database
    const result = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });

    res.json({
      message: `Register User with username: ${result.username} Successfully`,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    //check username
    const existUser = await authUserService.findUserByUsername(username);

    console.log(existUser);
    if (!existUser) {
      createError(400, "Username invalid");
    }

    //check password
    const matchUserPassword = hashService.comparePassword(
      password,
      existUser.password
    );
    console.log("matchUserPassword", matchUserPassword);

    const payload = { id: existUser.id };

    const userToken = jwtService.genUserToken(payload);
    console.log("docToken", userToken);

    res.status(200).json({ success: true, userToken });
  } catch (error) {
    next(error);
  }
};
