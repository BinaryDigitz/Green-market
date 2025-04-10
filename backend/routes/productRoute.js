import { Router } from "express";
import { addProduct, deleteProduct, getProducts, getProduct, updateProduct } from "../controllers/Product.controllers.js";

const productRouter = Router()

productRouter.post('/add', addProduct)

productRouter.get('/list', getProducts)

productRouter.get('/list/id', getProduct)

productRouter.post('/update', updateProduct)

productRouter.post('/delete', deleteProduct)


export default productRouter;