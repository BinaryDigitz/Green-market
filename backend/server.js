import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import morgan from 'morgan'
import loadDb from "./config/loadDB.js";
import errorHandler from "./middleware/ErrorHandler.js";
import { JWT_SECRET } from "./config/env.js";
import userRouter from "./routes/userRoute.js";
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
app.use('/api/auth', userRouter)


// error handlers
app.use(errorHandler)

loadDb()
export default app;