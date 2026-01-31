//Assignment 2: Exam Result Summary
//---------------------------------
//Scenario : Marks are stored subject-wise for a student.

//
//Tasks:  
//Calculate total marks
//Calculate average marks
//Find the highest scoring subject
//Add a new subject computer: 90
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
function tot(){
console.log("tot marks:",marks.maths+marks.physics+marks.chemistry+marks.english)
}
tot();
function avg(){
    console.log("avg marks:",(marks.maths+marks.physics+marks.chemistry+marks.english)/4)
} 
