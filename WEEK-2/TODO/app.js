   //iii. app.js - Main application
                  // TODO: Import task functions
    import {addTask,getAllTasks,completeTask} from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                    console.log(addTask("Task One","high","2026-12-31")); // Valid
                  // 2. Display all tasks
                    console.log(getAllTasks());
                  // 3. Complete a task
                    console.log(completeTask(1));
                  // 4. Display all tasks again
                    console.log(getAllTasks());