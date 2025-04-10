import { failFn, successFn } from "../middleware/return.js";
import asyncMiddleware from "../middleware/asyncMiddleware.js";
import { ADMIN_EMAIL, ADMIN_PASSWORD, JWT_SECRET, NODE_ENV } from "../config/env.js";
import Joi from 'joi'
import jwt from "jsonwebtoken";

// Admin login : api/admin/login

export const adminLogin = asyncMiddleware(async (req, res) => {
 
  // if (error) return res.json(failFn(error.details[0].message));

  const { email, password } = req.body;
  if (password === ADMIN_PASSWORD && email === ADMIN_EMAIL) {
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1d" });

    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json(successFn("Admin loggedin Successfully"));
  } else {
    res.json(failFn("Invalid credentials"));
  }
});

// CHECK AUTH : /api/admin/is-auth
export const isAdminAuth = asyncMiddleware( async (req, res ) =>{
    return res.json({ success: true})
})


// LOGOUT : /api/admin/logout

export const adminLogout = asyncMiddleware( async ( req, res) =>{
    res.clearCookie('adminToken',{
        httpOnly: true,
        secure: NODE_ENV === 'production',
        sameSite: NODE_ENV === 'production' ? 'none' : 'strict'
    })
    return res.json(successFn('Logout successfully'))
})





