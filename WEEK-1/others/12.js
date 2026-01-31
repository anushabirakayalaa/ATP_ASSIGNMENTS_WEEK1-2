//function declaration
function findsum(a,b)
{
    return a+b
}
//function expression 
let findsum1=function(a,b)
{
    let sum=a+b
    return sum
}

//Arrow function(simplify function expression)
let marks=[10,30,89,65,45]
//filter(selection)
//get marks<70
let result1=marks.filter(element=>element<70)
console.log(result1)
//map(modification/transformation)
//add 5 marks to all
let result2=marks.map(element=>element+5)
console.log(result2)
//reduce(aggregations)
//find sum of marks
let r4=marks4=marks.reduce((accumulator,element)=>accumulator+element)
console.log(r4)
let small=marks.reduce((accumulator,element)=>accumulator<element?accumulator:element)
console.log(small)
//find elem
    //find 23
let r5=marks.find(element=>element==23)
console.log(r5)//if undefined --->not found  else its found
