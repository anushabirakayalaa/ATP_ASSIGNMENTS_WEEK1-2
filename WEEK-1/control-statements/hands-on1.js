//  HANDS-ON 1: Smart Login Status Engine
// ----------------------------------------

// Initial data:
let isLoggedIn = true;
let isProfileComplete = false;

// Tasks:
//    1. If user is not logged in → show "Please login"
//    2. If logged in but profile incomplete → show "Complete your profile"
//    3. If logged in and profile complete → show "Welcome back!"
//    4. Store the result in message
//    5. Print the message
//1. If user is not logged in → show "Please login" (primary condition check)
   let res;
   if(!isLoggedIn){
       res="Please log in"
   } 
   //2. If logged in but profile incomplete → show "Complete your profile" (nested condition)
   else if(!isProfileComplete){
      res="Complete your profile"
   } 
   //3. If logged in and profile complete → show "Welcome back!" (success case)
   else {
       res="Welcome back!"
   }
   //5. Print the message to console
   console.log(res)     




