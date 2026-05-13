import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { userAuth } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login() {
  const { register, handleSubmit } = useForm();
  const { login, isAuthenticated, currentUser } = userAuth();
  const navigate = useNavigate();

  const onUserLogin = async (data) => {
    await login(data); // Store handles the API call
  };

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      if (currentUser.role === "USER") {
        navigate('/userdashboard');
      } else if (currentUser.role === "AUTHOR") {
        navigate('/authordashboard');
      }
    }
  }, [isAuthenticated, currentUser, navigate]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-pink-100'>
      <form onSubmit={handleSubmit(onUserLogin)} className='bg-white p-10 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-pink-700 mb-6'>Login</h1>
        <div className='flex gap-4 mb-4'>
           <label><input type="radio" value="user" {...register("role")} /> User</label>
           <label><input type="radio" value="author" {...register("role")} /> Author</label>
        </div>
        <input type='email' {...register("email")} placeholder="Email" className='w-full p-2 mb-3 bg-gray-100 border rounded'/>
        <input type='password' {...register("password")} placeholder="Password" className='w-full p-2 mb-3 bg-gray-100 border rounded'/>
        <button className='bg-cyan-500 text-white p-2 w-full rounded'>Login</button>
      </form>
    </div>
  );
}

export default Login;