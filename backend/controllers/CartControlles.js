import asyncMiddleware from "../middleware/asyncMiddleware";
import { successFn } from "../middleware/return.js";
import User from '../models/user.model.js'


//update user cartdata : /api/cart/update

export const updateCart = asyncMiddleware( async (req, res) =>{
   const { userId, cartItems } = req.body
   await User.findByIdAndUpdate(userId, { cartItems})

   res.json(successFn('Cart updated successfull', 201))
})