import { Schema,model } from "mongoose";

//create cart Schema
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId, //its a type of object id
        ref:"product"}, //name of product model-->as reference is given here
        quantiy:{
            type:Number,
            default:1,
        }
    }

);
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name required"]
    },
    email:{
        type:String,
        required:[true,"Email required"],
        unique:[true,"duplicate users"] //add to index
        //unique key is not a validator
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
    //trap--its not bothered
    //this is because we are only hashing the password field
    cart:{
        type:[cartSchema],//we have created and used the Schema type here
        required:[true,"Buy Something "]
    }
},{
        strict:"throw",
        timestamps:true,
        versionKey:false
})
export const UserModel=model("user",userSchema)//---model(name of the model,Schema)
//takes model name and pluralizes it