import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config/env.js";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    cart:{
        type:Object,
        default:{}
    },
    avatar:{
        type:String,
        default:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s'
    }
}, 
{minimze:false}
)
userSchema.methods.generateToken = function (){
    return jwt.sign({ id: this._id}, JWT_SECRET, { expiresIn: '1h'})
}
const User = mongoose.model('User', userSchema)

export default User