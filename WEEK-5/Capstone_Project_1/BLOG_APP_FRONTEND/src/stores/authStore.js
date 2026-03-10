import { create } from "zustand";
import axios, { isAxiosError } from "axios"

//create auth store to manage authentication state of the application
export const userAuth=create((set)=>({
    //state
    //function to modify the state
    currentUser:null,
    isAuthenticate:false,
    loading:false,
    error:null, 

//Login function for user,author and admin
    login:async(userCredWithRole)=>
    {
        const {role,...userCredObj}=userCredWithRole
        try{
            //set loading true
            set({loading:true,error:null})
            //make api call
            let res=await axios.post("http://locslhost:400/common-api/login",userCredObj,{withCredentials:true})
            //withCreds:true----for every req we need to send this as the last argument
            console.log("res is", res)
            //update state
            set({
                loading:false,
                isAuthenticated:false,
                currentUser:res.payload,
                erros:null
            })
        }catch(err)
        {
                console.log("Error is",err)
                set({
                    loading:false,
                    error:err.response?.data?.error || "Login Failed",
                    isAuthenticated:false,
                    currentUser:false
                })
        }
    },
// logout 
    logout:async()=>{
        try{
            //set loading state to true
            set({loading:true,error:null})
            //make logout api request
            await axios.post("http://localhost:4000/common-api/logout",{},{withCredentials:true})
            //update the state
            set({
                loading:false,
                isAuthenticated:false,
                currentUser:null,
                //error:null
            })
        }catch(err)
        {
            console.log("Error is",err)
            set({
                loading:false,
                isAuthenticated:false,
                currentUser:null,
                error:err.message
            })
        }
    },
    readArticles: async () => {
        try {
            set({ loading: true });
            let res = await axios.get("http://localhost:4000/user-api/articles",{withCredentials:true});
            // Assuming res.data.payload contains the array of articles
            set({ loading: false, articles: res.data.payload || [] });
        } catch (err) {
            set({ loading: false, error: "Could not fetch articles" });
        }
    }
}))