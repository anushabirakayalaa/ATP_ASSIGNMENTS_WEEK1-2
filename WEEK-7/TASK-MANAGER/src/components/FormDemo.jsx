import {useForm} from 'react-hook-form'

function FormDemo()
{
    const{register,handleSubmit,setError,formState:{errors} }=useForm(); //useForm is a function to start using the form submission
    //setError 
    
    //submit form
    const submitForm=(Obj)=>
    {
        console.log(Obj)
    }
    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className='mb-3'>
                <input type="text" {...register("username",{required:true,minLength:3})}  placeholder='username' className='border-2'/>
                {
                    errors.username?.type==='required'&& <p className='text-red-600'>Username required</p>
                    }
                    {
                    errors.username?.type==='minLength'&& <p className='text-red-600'>MinLength required</p>
                    }
                </div>
                <div>
                <input type="text" {...register("password",{required:true})} placeholder='password'/>
                </div><div>
                    <button type="submit" className='bg-blue-700 text-lime-50' >SUBMIT</button>
                </div>
            </form>
        </div>
    )
}
export default FormDemo;

//***VALIDATION RULES***:-
    // requires
    //minLength & maxLength
    //min & max
    //patterns
//unique is not a validator----> it creates index---it belongs to express,schema and db's...not for validations


// ternary operator--> condition? react elem 1 : react elem 2
//condition && react elem ====  if && else