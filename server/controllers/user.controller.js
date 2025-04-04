import User from "../models/user.model.js";

export const getUserInfo = async (req, res, next) => {
  try {
    console.log(req.user);
    const userId = req.user.userId;
    if (!userId) {
      const error = new Error("User ID not found in token payload");
      error.statusCode = 401;
      throw error;
    }

    const user = await User.findById(userId).select("-password");
    if (!user) {
      const error = new Error("User not found.");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};
