import Joi from "joi";
import asyncMiddleware from '../middleware/asyncMiddleware.js';
import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { NODE_ENV } from "../config/env.js";


// register
export const register = asyncMiddleware( async (req, res, next) =>{
    
    const { error } = validateRegister(req.body)
    if(error ) return res.json({success:false, statusCode: 400, message: error.details[0].message})
    const { name, email, password } = req.body

 const existingUser = await User.findOne({ email})
 if(existingUser) return res.json({ success:false, statusCode:404, message: 'Email already exist'})

const hashPassword = await bcrypt.hash(password, 10)
let user = new User({ name, email, password: hashPassword})
await user.save()

const token = user.generateToken()
res.cookie('token', token, {
    httpOnly:true,  //Prevent Javascript to access the cookie
    secure: NODE_ENV === 'production', // secure cookie in production mode only
    sameSite: NODE_ENV === 'production' ? 'none' : 'strict', //CSRF PROTECTION
    maxAge: 7 * 24 * 60 * 60 * 1000 // cookie expiration time
})
return res.json({ success: true, statusCode: 201, message: 'User created successfully', user: { email:user.email, name:user.name}})

 
})









function validateRegister(user){
    const schema = Joi.object({
        name: Joi.string().min(3),
        email:Joi.string().min(4),
        password: Joi.string().min(4),
        cart: Joi.object()
    })
    return schema.validate(user)
}
