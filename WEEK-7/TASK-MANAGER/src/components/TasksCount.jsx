//rfce--react-19 version....extention 
import React from 'react'

function TasksCount({tasks}) {
    // console.log(tasks)
  return (
    <div>
        <h1 className='text-4xl text-amber-400'>Tasks Count</h1>
        <p className='mt-4'>{tasks.length}</p>
        
    </div>
  )
}

export default TasksCount