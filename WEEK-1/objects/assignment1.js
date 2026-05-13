// Assignment 1: User Profile Manager
// ----------------------------------
// Scenario : You are managing a logged-in user’s profile in a web application.
//Tasks:  
//Read and print the user’s name and email
//Add a new property lastLogin: "2026-01-01"
//Update role from "student" to "admin"
//Delete the isActive property
//Use Object.keys() to list all remaining fields
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
console.log(user.name,user.email)
user.lastlogin="2026-01-01"
console.log(user)
user.role="admin"
console.log(user)
delete user.isActive
console.log(user)
console.log(Object.keys(user))