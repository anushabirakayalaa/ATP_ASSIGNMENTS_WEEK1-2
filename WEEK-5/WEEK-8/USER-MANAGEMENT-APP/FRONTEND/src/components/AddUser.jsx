import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { apiUrl } from '../api';

function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log('form data', data);
    setLoading(true);
    try {
      const res = await fetch(apiUrl('/user-api/users'), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)  // Use 'data' from form, not undefined 'formData'
      });
      if (res.ok) {
        const responseData = await res.json();
        console.log("User created:", responseData);
        navigate('/users');  // Navigate after success
      } else {
        console.error("Failed to create user:", res.statusText);
      }
    } catch (err) {
      console.error("Error creating user:", err);
    } finally {
      setLoading(false);  // Reset loading state
    }
  };

  return (
    <div className='text-center py-20'>
      <h1 className='text-gray-600 text-2xl mb-6'>Add New User</h1>
      {/* create a form */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <input type="text" {...register('name', { required: true })} placeholder="Name" className='mb-4 p-2 border w-full'/>
        {errors.name && <p className="text-red-500">Name is required</p>}
        <input type="email" {...register('email', { required: true })} placeholder="Email" className='mb-4 p-2 border w-full'/>
        {errors.email && <p className="text-red-500">Email is required</p>}
        <input type="date" {...register('dateOfBirth')} className='mb-4 p-2 border w-full'/>
        <input type="number" {...register('mobileNumber', { required: true })} placeholder="Mobile Number" className='mb-4 p-2 border w-full'/>
        {errors.mobileNumber && <p className="text-red-500">Mobile Number is required</p>}
        <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-500 text-white">
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
}

export default AddUser
