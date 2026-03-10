import React from 'react'

function TasksList({tasks}) {

    
  return (
    <div>
        <h3 className='text-4xl text-amber-400 '>Tasks List</h3>
        {
            tasks.length==0?<img className='w-50' src='https://img.uxcel.com/cdn-cgi/image/format=auto/practices/replace-the-element-1602859019475/b-1702667421185-2x.jpg'/>:tasks.map((taskObj,index)=><p className='mt-2'>{taskObj.taskName}</p>)
        }
    </div>
  )
}

export default TasksList


//if tasks  list empty then display msg--"empty" 
// else iterate the list 
//condition? empty:iterate