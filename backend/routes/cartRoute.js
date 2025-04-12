import { Router } from 'express'
import authUser from '../middleware/authUser.js';
import { updateCart } from '../controllers/CartControlles.js';

const cartRouter = Router()


cartRouter.post('/update', authUser, updateCart)

export default cartRouter;