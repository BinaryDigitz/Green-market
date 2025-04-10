import { Router } from "express";
import { addAddress, getAddresses } from "../controllers/addressController.js";
import authUser from "../middleware/authUser";

const addressRouter = Router()

addressRouter.post('/add',authUser, addAddress)

addressRouter.post('/get', getAddresses)


export default addressRouter;