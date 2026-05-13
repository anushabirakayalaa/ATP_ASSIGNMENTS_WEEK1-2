// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
 const students = [
   { id: 1, name: "Ravi", marks: 78 },
   { id: 2, name: "Anjali", marks: 92 },
   { id: 3, name: "Kiran", marks: 35 },
   { id: 4, name: "Sneha", marks: 88 },
   { id: 5, name: "Arjun", marks: 40 }
 ];

// Tasks:
    
// filter() students who passed (marks ≥ 40)
let passedStudents = students.filter(stud=>stud.marks>=40)
console.log(passedStudents)
// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D
let grandField = students.map(stud=>
{
    let grade;
    if(stud.marks>=90) grade='A'
    else if(stud.marks>=75) grade='B'
    else if(stud.marks>=60) grade='C'
    else grade='D'
    return {...stud,grade:grade}

});
console.log(grandField)

   
// reduce() to calculate average marks
let sum=students.reduce((tot,stud)=>tot+stud.marks,0)
//console.log(sum)
let average=sum/students.length
console.log(average)
// find() the student who scored 92
let above92 = students.find(stud=>stud.marks===92)
console.log(above92)
// findIndex() of student "Kiran"
let findKiranPosition= students.findIndex(stud=>stud.name==="Kiran")
console.log(findKiranPosition)