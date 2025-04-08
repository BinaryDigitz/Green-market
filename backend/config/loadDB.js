import mongoose from "mongoose";
import { MONGODB_URI, PORT } from "./env.js";
import app from "../server.js";

function loadDb(){
    mongoose.connect(MONGODB_URI)
    .then(() =>{
        console.log('Connected to database....');
        app.listen(PORT, () =>{
            console.log(`Green market App is running at http://localhost:${PORT}`)
        })
    }).catch((ex) =>{
        console.log('Failed to connect to Database..'. ex.message);
    })
}
export  default loadDb