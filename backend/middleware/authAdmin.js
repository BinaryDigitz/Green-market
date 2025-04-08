import { ADMIN_EMAIL, JWT_SECRET } from "../config/env.js";
import jwt from "jsonwebtoken";
import { failFn, successFn } from "./return.js";

const authAdmin = async (req, res, next) => {
  const { adminToken } = req.cookies;
  if (!adminToken) return res.json(failFn("Unauthorized", 403));
  try {
    const decode = jwt.verify(adminToken, JWT_SECRET);
    if (decode.email === ADMIN_EMAIL) {
      next();
    } else {
      return res.json(failFn("Forbidden", 401));
    }
  } catch (ex) {
    res.json(failFn(ex.message));
  }
};
export default authAdmin;
