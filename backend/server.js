import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import morgan from 'morgan'
import loadDb from "./config/loadDB.js";
import errorHandler from "./middleware/ErrorHandler.js";
import { JWT_SECRET } from "./config/env.js";
import userRouter from "./routes/userRoute.js";
import adminRouter from "./routes/adminRoute.js";
import productRouter from './routes/productRoute.js'
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
const app = express()

process.on('uncaughtException', ex => {
    console.log('UNCAUGHT EX');
    console.log(ex.message, ex);
})
if (!JWT_SECRET) {
    console.log('FATAL ERROR: JWT SECRET KEY is not defined');
    process.exit(1);

}
const corsOptions = {
    origin: 'http://localhost:5173',
    optionSuccessStatus: 200,
    credentials: true
}
// middleware
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(morgan('tiny'))
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.json({ success: true, statusCode: 200, message: 'Hello world' })
})
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter)


// error handlers
app.use(errorHandler)

loadDb()
export default app;