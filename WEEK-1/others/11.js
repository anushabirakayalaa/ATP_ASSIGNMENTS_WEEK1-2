let marks=[90,70,40,89,56]
//filter(selection)
//get all marks less than 50
let result1=marks.filter(function(element)
{
    return element<50
})
console.log(result1)
//WRITE A FUNCTION THAT CAN EXTRACT MARKS>70 ,PACK THEM TO ARRAY AND RETURN IT 
function getmarks(marksarray)
{
    let empt=[]
    for (v of marks)
    {
        if(v>70)
        {
            empt.push(v)
        }
    }
console.log(empt)
}
getmarks(marks)
//simple wayyyy in js
let result2=marks.filter(function(element)
{
    return element>70
})
console.log(result2)
//find all marks btw 30 and 90
let result3=marks.filter(function(element)
{
    return element>30 && element<=90
})
console.log(result3)

let salaries=[100,200,300]

//addd 50 for each slary[150,250,350]
let result4=salaries.map(function(element){
    return element+50
})
console.log(result4)