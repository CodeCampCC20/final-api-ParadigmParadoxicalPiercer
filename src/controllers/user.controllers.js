import userService from "../services/user.service.js";

export const userControllerGetMe = async (req, res, next) => {
  try {
    const { id } = req.user;
    // const { username, password } = req.body;
    const me = await userService.findUserbyId(id);

    res.json({
      id: me.id,
      username: me.username,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllerUpdateMe = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { username, password } = req.body;
    console.log(username, password);
    const me = await userService.updateUserbyId(id, { username, password });

    res.json({
      id: me.id,
      username: me.username,
    });
  } catch (error) {
    next(error);
  }
};
