import { Router } from "express";
import { adminLogin, adminLogout, isAdminAuth } from "../controllers/admin.controllers.js";
import authAdmin from "../middleware/authAdmin.js";


const adminRouter = Router()

adminRouter.post('/login', adminLogin)

adminRouter.get('/isAuth', authAdmin, isAdminAuth) 

adminRouter.get('/logout',authAdmin, adminLogout)


export default adminRouter;