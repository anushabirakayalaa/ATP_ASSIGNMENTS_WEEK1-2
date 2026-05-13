// Assignment 2: Exam Result Summary
// ---------------------------------
// Scenario : Marks are stored subject-wise for a student.

// Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// Tasks:
//     1. Calculate total marks
function tot(){
console.log("tot marks:",marks.maths+marks.physics+marks.chemistry+marks.english)
}
//     2. Calculate average marks
function avg(){
    console.log("avg marks:",(marks.maths+marks.physics+marks.chemistry+marks.english)/4)
}
//     3. Find the highest scoring subject
function high(){
    let highestSubject = '';
    let highestMarks = 0;
    for (let subject in marks) {
        if (marks[subject] > highestMarks) {
            highestMarks = marks[subject];
            highestSubject = subject;
        }   
    }
    console.log("highest scoring subject:", highestSubject, "with marks:", highestMarks);
}
//     4. Add a new subject computer: 90
marks.computer = 90;

// Calling the functions to display results'
tot();
avg();
high(); 