import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router';
function Register() {
    const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState(null)
  const[]=useState()
  const navigate = useNavigate()
  const autherRegister=async(newUser)=>{
    console.log(newUser)
    setLoading(true)
    try{
    let{role,...userobj}=newUser
    if(role==="user")
    {
      let res= await axios.post("http://localhost:4000/user-api/users",userobj)
      console.log(res)
      let reso=res.data
      console.log(reso)
      if(reso.status===201)
      {
        // after the registration we need to navigate to login page
        navigate("/login")
      }

    }
  
     if(role==="author")
     {
      let res= await axios.post("http://localhost:4000/author-api/users",userobj)
      let reso=res.data
      if(reso.status===201)
      {
        // after the registration we need to navigate to login page
        navigate("/login")
      }

     }
    }
     catch(err){
      setError(err.response?.data?.error || "Registration Failed")
     }
     finally{
      setLoading(false)
     }

  }

  const onSubmit = (data) => {
  autherRegister(data)
  };

  return (
    <div className='min-h-screen flex
    items-center justify-center bg-purple-100 ' >
      

    <form onSubmit={handleSubmit(onSubmit)}
    className=' bg-white p-5 rounded-lg'
    >
      <h1 className='text-3xl text-purple-500 text-center font-extrabold '>Register Here</h1>
        <div className='flex items-center gap-4 mb-5 '>
          
        <span className='font-bold text-2xl text-gray-700 p-2'>select role</span>
    <input type="radio" value="user" {...register("role",{required:true})}/> User
<input type="radio" value="author" {...register("role",{required:true})}/> Author
        </div>

        <input {...register("firstName", { required: true })}
        placeholder="first name" className='w-full p-2 mb-3 bg-gray-200 rounded'/> 
        {errors.firstName && <p className='text-red-500'> First name is required</p>}

        <input {...register("lastName", { required: true })}
        placeholder="last name" className='w-full p-2 mb-3 bg-gray-200 rounded'/>
           {errors.lastName &&  <p className='text-red-500'> Last name is required</p>}

        <input type='email' {...register("email", { required: true })}
        placeholder="email" className='w-full p-2 mb-3 bg-gray-200 rounded'/>
     
        <input type='password' {...register("password", { required: true })}
        placeholder="password" className='w-full p-2 mb-3 bg-gray-200 ronded'/>
        {errors.password && <p className='text-red-500'>Password is required</p>}

      
        <input type='text' {...register("profileImageUrl",{required:true})}
            placeholder="image url"className='w-full p-2 mb-3 bg-gray-200 rounded'/>
     
      {errors.firstName && <p>Username is required</p>}

      <button className='bg-cyan-400 text-white px-6 py-2 rounded w-full hover:cursor-pointer hover:bg-blue-700'>Register</button>
    </form>
    </div>
   
    
  );
}
  

export default Register