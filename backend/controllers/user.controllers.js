import Joi from "joi";
import asyncMiddleware from '../middleware/asyncMiddleware.js'


// register


export const register = asyncMiddleware( async (req, res, next) =>{
    console.log("hello register");
    
    const { error } = validateRegister(req.body)
    if(error ) return next({ statusCode: 400, message: error.details[0].message})
 
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
