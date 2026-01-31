//i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                        if(title && title.length>=3){
                            return true;
                        }
                    }

                        
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                
                        // Your code here
                        if(priority && (priority==="low" || priority==="medium" || priority==="high")){
                            return true;
                        }
                    }
                    
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {

                        // Your code here
                        let today=new Date()
                        let dueDate=new Date(date)  
                        if(dueDate>today){
                            return true;
                        }   

                      }

                      export {validateTitle, validatePriority, validateDueDate};


