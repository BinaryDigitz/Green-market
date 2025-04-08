import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env.js'

const authUser = async (req, res, next ) =>{
    const  { token } = req.cookies
    if(!token) return res.json({ success:false, message: 'Not Authorized'})

        try{
            const decode = jwt.verify(token, JWT_SECRET)
            if(decode){
                req.body.userId = decode.id
            }
            else{
                return res.json({ success: false, message: 'Forbidden', statusCode:403})
            }
            next()
        }
        catch(ex){
            res.json({ success:false, message: ex.message})
        }
}
export default authUser