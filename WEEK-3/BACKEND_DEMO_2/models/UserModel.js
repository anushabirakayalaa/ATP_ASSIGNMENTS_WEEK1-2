//Create User Schema
//Create User Model with that schema  
//========================================================
//Model => always shld be upper camel case
import {Schema,model} from "mongoose";
//Create User Schema
const userSchema=new Schema(
    {
        username:{
            type:String,
            //required is validation field
            required:[true,"Username is required"],
            minLength:[4,"Mini length should be 4"],
            maxLength:[8,"Max length should be 4"]
           
        },
        password:{
            type:String,
            required:[true,"Password is required"],

        },
        age:{
            type:Number,
            required:[true,"Age is required"],
            min:[18,"Age should be above 18"],
            max:[25,"Age should be less than 25"]

        }
    },{
     strict:"throw",//throws error if voilates anything
     timestamps:true//to get the createdAt and updatedAt times in UTC format
    }
    //MANGOOSE VALIDATION RULES--required,min,max,patterns(not used here),rigids
)

//Create User Model with that schema
//model(modelname,schemaname)
export const UserModel=model("user",userSchema)
//dont give modelname in pulral---coz in our db mongoose takes it in pluarl