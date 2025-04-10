import asyncMiddleware from "../middleware/asyncMiddleware.js";
import Address from "../models/address.model.js";

//ADD ADDRESS: /api/address/add

//Success middleware
 function successFn(message, statusCode= 200, address=null){
    return { success: true, statusCode, message, address}
 }

export const addAddress = asyncMiddleware( async (res, res) =>{
    const { address, userId } = req.body
    await Address.create({ ...address, userId})
 return res.json(successFn('Address added succesfull', 201))
})

//GET ALL ADDRESSES : /api/address/list

export const getAddresses = asyncMiddleware( async ( req, res ) =>{
    const { userId } = req.body
    const addresses = await Address.finde({ userId})
    return res.json(successFn('success', 200, addresses))

})