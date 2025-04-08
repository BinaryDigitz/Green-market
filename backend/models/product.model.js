import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:Array,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    offerPrice:{
        type:Number,
        required:true,
    },
    image:{
        type:Array,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    isStock:{
        type:Boolean,
        default:true
    }
  
}, 
{timestamp:true}
)

const Product = mongoose.model('Product', productSchema)

export default Product