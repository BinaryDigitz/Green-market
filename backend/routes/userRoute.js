import { Router } from "express";
import { register, login, isAuth, logout } from "../controllers/user.controllers.js";
import authUser from "../middleware/authUser.js";

const userRouter = Router()


userRouter.post('/register', register)

userRouter.post('/login', login)

userRouter.get('/is-auth', authUser, isAuth)

userRouter.get('/logout', authUser, logout)



export default userRouter