import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

const authenticateUser = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    const error = new Error("Authentication failed. No token provided.");
    error.statusCode = 401;
    throw error;
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    const err = new Error("Authentication failed. Invalid token.");
    err.statusCode = 401;
    throw err;
  }
};

export default authenticateUser;
