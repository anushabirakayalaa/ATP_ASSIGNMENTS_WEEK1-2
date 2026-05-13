import TasksCount from './TasksCount'
import AddTask from './AddTask'
import TasksList from './TasksList'
import { useState } from 'react'

function TaskManager() {
    let [tasks,setTasks]=useState([])
    const addNewTask =(taskObj)=>
    {
        setTasks([...tasks,taskObj])
    }
    
  return (
    <div>
        <h1 className='text-7xl text-blue-300 mb-10'>Task Manager</h1>
        <div className='flex justify-around'>
        <AddTask addNewTask={addNewTask}/>
        <TasksList tasks={tasks}/>
        <TasksCount tasks={tasks}/>
        </div>
        
    </div>
  )
}

export default TaskManager