import { ADMIN_EMAIL, JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  const { adminToken } = req.cookies;
  if (!adminToken)
    return res.json({
      success: false,
      message: "Unauthorized",
      statusCode: 403,
    });
  try {
    const decode = jwt.verify(adminToken, JWT_SECRET);
    if (decode.email === ADMIN_EMAIL) {
      next();
    } else {
      return res.json({
        success: false,
        message: "Forbidden",
        statusCode: 401,
      });
    }
  } catch (ex) {
    res.json({ success: false, message: ex.message });
  }
};
export default authAdmin;
