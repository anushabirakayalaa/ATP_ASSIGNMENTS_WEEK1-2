import { Schema,model } from "mongoose";
//Create USer Schema with validation
    // name, email,dob,mob.no.
const userSchema= new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]},
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"email already exists"]},
    dateOfBirth:{
        type:Date,
        required:[true,"Email is required"],
        default:new Date()
    },
    mobileNumber:{
        type:Number
    },
    // status -- for soft delete
    status:{
        type:Boolean,
        default:true
    },
},
{timestamps:true,
versionkey:false,
strict:"throw"
},
);
//Create User Model for the User Schema
export const UserModel=model("user",userSchema);