import {useForm} from 'react-hook-form'
import TaskManager from './TaskManager'

function AddTask({addNewTask}) {
    const {register,handleSubmit} = useForm()
    const onSubmitForm=(taskObj)=>
        {
            // console.log(taskObj);
            addNewTask(taskObj)
                          
        }
    
  return (
    <div>
        <h3 className='text-4xl text-amber-400 mb-3'>ADD TASK</h3>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className='mb-3'>
                <input type="text " {...register("taskName")} className='border px-3 py-2 w-full mb-5' />
            </div>
            <div>
            <button className= 'border-2 bg-pink-700 p-2  text-lime-100'>ADD</button>
            </div>
            </form>
        
    </div>
  )
}

export default AddTask