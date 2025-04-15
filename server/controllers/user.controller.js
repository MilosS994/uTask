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

export const updateUserInfo = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const { name, email, password, oldPassword } = req.body;

    if (!name && !email && !password) {
      const error = new Error(
        "Please provide at least one field to update (name, email, or password)"
      );
      error.statusCode = 400;
      throw error;
    }

    const user = await User.findById(userId);

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password && oldPassword) {
      const passwordMatch = await bcrypt.compare(oldPassword, user.password);

      if (!passwordMatch) {
        const error = new Error("Incorrect old password");
        error.statusCode = 400;
        throw error;
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    const updatedUser = await user.save();

    const userWithoutPassword = updatedUser.toObject();
    delete userWithoutPassword.password;

    res.status(200).json({
      success: true,
      message: "User information updated successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};
