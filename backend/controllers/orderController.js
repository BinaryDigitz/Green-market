import asyncMiddleware from '../middleware/asyncMiddleware.js'
import Product from '../models/product.model.js'

//PLACE ORDER COD : /api/order/cod
export const placeOrderCOD = asyncMiddleware( async ( req, res ) =>{
 const { userId, items, address }= req.body
  if( !address || items.length === 0){
    return res.json({ success: false, message: 'Invalid data'})
  }
  //Calculate amount using Items
  let amount = await items.reduce( async (acc, item) =>{
    const product = await Product.findById(item.product)
    return ( await acc) + product.offerPrice * item.quantity
  },0)
    // Add tax charge (2%)
    amount += Math.floor(amount * 0.02)
  });
