//ii. task.js - Task operations
                    // TODO: Import validator functions
                    import {validateTitle,validatePriority,validateDueDate} from './validator.js'
    
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate){

                      // Validate using imported functions
                      if (!validateTitle(title)){
                        return "Invalid Title";
                      }
                      if (!validatePriority(priority))
                      {
                        return "Invalid Priority";
                      }
                      if (!validateDueDate(dueDate)){
                        return "Invalid Due Date";
                      }

                      // If valid, add to tasks 
                      if(validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)){
                        const task={
                          id:tasks.length+1,
                          title:title,
                          priority:priority,
                          dueDate:dueDate,
                          completed:false
                        }
                        tasks.push(task);
                        return "Task Added Successfully";
                      }
                      // Return success/error message
                      return "Task could not be added";
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                        return tasks;
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                        const task=tasks.find(t=>t.id===taskId);
                        if(task){
                          task.completed=true;
                          return "Task marked as complete";
                        }   
                      // Find task and mark as complete
                        return "Task not found";
                        
                    }
                    export {addTask, getAllTasks, completeTask};