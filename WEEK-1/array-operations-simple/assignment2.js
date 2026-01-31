//Assignment 2: Online Course Name Processor
//------------------------------------------
// Scenario : You are preparing a course list for display on a website.

// Test data:
// const courses = ["javascript", "react", "node", "mongodb", "express"];


// Tasks:
//     1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//5. findIndex() of "node"
const courses = ["javascript", "react", "node", "mongodb", "express"];
//     1. filter() courses with name length > 5
let r1=courses.filter(cour=>cour.length>5)
console.log(r1)
//     2. map() to convert course names to uppercase
let r2=courses.map(cour=>cour.toUpperCase())
console.log(r2)
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let r3=courses.reduce((acc,cour)=>acc+"|"+cour) 
console.log(r3)
//     4. find() the course "react"
let r4=courses.find(cour=>cour=='react')
console.log(r4)
