//Create product Schema
import { Schema,model } from "mongoose";
const productSchema=new Schema({
    productid:{
        type:Number,
        required:[true,"Product id is required"]

    },
    productname:{
        type:String,
        required:[true,"Product name is required"],
        minlength:[2,"Minimum length is required"]
    },

},{
    strict:"throw",
    timestamps:true

}
)
//Create product  Model with Schema
export const ProductModel=model("Product",productSchema)