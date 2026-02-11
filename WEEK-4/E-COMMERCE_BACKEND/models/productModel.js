import { Schema,model } from "mongoose";

//name
const productSchema=new Schema({
    productName:{
        type:String,
        required:[true,"Name required"]
    },
    price:{
        type:Number,
        required:[true,"Price required"]
    },
    brand:{
        type:String,
        required:[true,"Brnad required"]
    }},{
        strict:"throw",
        timestamps:true,
        versionKey:false
    
})

export const ProductModel= model("product",productSchema)