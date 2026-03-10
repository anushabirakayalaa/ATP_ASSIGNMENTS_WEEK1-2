import { useState } from 'react';
import { useForm } from "react-hook-form";

function RegistrationDemo() {
    const [users, setUser] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitForm = (Obj) => {
        
         console.log(Obj);

        // setError("dob",{
        //     type:"manual",
        //     message:"the date after 2020"

            //error.dob.?type==="manual" && <p>{error.dob.message}</p>
        // })
        // add the new user when the form is submitted
        setUser(prevUsers => [...prevUsers, Obj]);
        setUser([...users, Obj]);
        console.log(users);
    };

    return(
        <div>
            <h1>User Registration Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <input type="text" {...register("firstname", { required: true, minLength: 3 })} placeholder='firstname' className='border-2'/>
                {
                    errors.firstname?.type==='required'&& <p className='text-red-600'>First required</p>
                }
                {
                    errors.firstname?.type==='minLength'&& <p className='text-red-600'>First required</p>
                }
                <input type="text" {...register("lastname", { required: true, minLength: 3 })} placeholder='lastname' className='border-2'/>
                {
                    errors.lastname?.type==='required'&& <p className='text-red-600'>last required</p>
                }
                {
                    errors.lastname?.type==='minLength'&& <p className='text-red-600'>last required</p>
                }
                <input type="text" {...register("email", { required: true, minLength: 3 })} placeholder='email' className='border-2'/>
                {
                    errors.email?.type==='required'&& <p className='text-red-600'>email required</p>
                }
                {
                    errors.email?.type==='minLength'&& <p className='text-red-600'>email required</p>
                }
                <input type="date" {...register("date", { required: true })} placeholder='Date of Birth' className='border-2'/>
                {
                    errors.date?.type==='required'&& <p className='text-red-600'>last required</p>
                }
                <div>
                    <button type="submit" className='bg-blue-700 text-lime-50' >SUBMIT</button>
                </div>
        </form>
        <h1>List of Users</h1>
        <table className='w-full'>
            <thead>
                <tr>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {users.map((userObj, idx) => (
                    <tr key={idx}>
                        <td className="border">{userObj.firstname}</td>
                        <td className="border">{userObj.lastname}</td>
                        <td className="border">{userObj.email}</td>
                        <td className="border">{userObj.date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}
export default RegistrationDemo;