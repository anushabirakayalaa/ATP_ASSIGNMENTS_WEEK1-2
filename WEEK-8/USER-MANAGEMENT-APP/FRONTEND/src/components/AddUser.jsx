import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let [loading,setLoading]=useState(false)
  const navigate = useNavigate();
  

  const onSubmit = data => {
    console.log('form data', data);
    // TODO: post to backend then navigate
    navigate('/users');
  };
// form submit
setLoading(true)
// make http post reqst to create a new user
try {
    let res=await fetch('http://localhost:4000/user-api/users'),
        {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(newUser),
        }
}
  return (
    <div className='text-center py-20'>
      <h1 className='text-gray-600 text-2xl mb-6'>Add New User</h1>
      {/* create a form */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <input type="text" {...register('name')} placeholder="Name" className='mb-4 p-2 border w-full'/>
        <input type="text" {...register('email')} placeholder="Email" className='mb-4 p-2 border w-full'/>
        <input type="date" {...register('dateOfBirth')} className='mb-4 p-2 border w-full'/>
        <input type="number" {...register('mobileNumber')} placeholder="Mobile Number" className='mb-4 p-2 border w-full'/>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">Save</button>
      </form>
    </div>
  );
}

export default AddUser