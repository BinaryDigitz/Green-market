import asyncMiddleware from "../middleware/asyncMiddleware.js";
import { v2 as cloudinary } from "cloudinary";
import Product from '../models/product.model.js'
import { successFn } from "../middleware/return.js";

// add  Product : /api/product/add
export const addProduct = asyncMiddleware( async (req, res ) =>{
    let productData = JSON.parse(req.body.productData)
   const images = req.files
   let imageUrls = await Promise.all(
    images.map( async (item) =>{
        return await cloudinary.uploader(item.path, { ressouce_type:'image'}).secure_url;
    })
   );
   await Product.create({...productData, image: imageUrls})
   res.json(successFn('Product added successfull', 201))

})
// get all Products : /api/product/list
export const getProducts = asyncMiddleware( async (req, res ) =>{
 const products = await Products.find({})
 res.json(successFn('All Products', 200, products))
})
// get Product : /api/product/id
export const getProduct = asyncMiddleware( async (req, res ) =>{

})
// update Product : /api/product/id
export const updateProduct = asyncMiddleware( async (req, res ) =>{

})
// delete Product : /api/product/id
export const deleteProduct = asyncMiddleware( async (req, res ) =>{

})