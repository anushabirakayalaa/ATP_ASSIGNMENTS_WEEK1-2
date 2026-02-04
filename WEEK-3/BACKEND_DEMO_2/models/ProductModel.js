//Create product Schema
import { Schema,model } from "mongoose";//importin Schema & model from mongoose
const productSchema=new Schema({ //defining Schema for productSchema
    //all properties of productSchema
    pid:{
        type:Number,
        required:[true,"Product id is required"]

    },
    productname:{
        type:String,
        required:[true,"Product name is required"],
        minlength:[2,"Minimum length is required"]
    },
    price:{
        type:Number,
        required:[true,"Price required"]
    },},{
    strict:"throw",//to throw error if any field other than defined in schema is added
    timestamps:true //to add createdAt and updatedAt fields automatically

}
)
//Create product  Model with Schema
export const ProductModel=model("product",productSchema) 
//exporting product model