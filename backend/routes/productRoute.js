import { Router } from "express";
import { upload } from "../config/multer.js";
import authAdmin from '../middleware/authAdmin.js'
import { addProduct, deleteProduct, getProducts, getProduct, updateProduct } from "../controllers/Product.controllers.js";

const productRouter = Router()

productRouter.post('/add',upload.array([images]), addProduct)

productRouter.get('/list', getProducts)

productRouter.get('/list/id', getProduct)

productRouter.post('/update', updateProduct)

productRouter.post('/delete', deleteProduct)


export default productRouter;