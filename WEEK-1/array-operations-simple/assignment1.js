//Assignment 1: Daily Temperature Analyzer
//----------------------------------------
//Scenario : You are analyzing daily temperatures recorded by a weather app.

//Test data:

//Tasks:
  //  1. filter() temperatures above 35
    //2. map() to convert all temperatures from Celsius → Fahrenheit
    //3. reduce() to calculate average temperature
    //4. find() first temperature above 40
    //5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];
  //  1. filter() temperatures above 35
let r1=temperatures.filter(temp=>temp>35)
console.log(r1)

//covert all temperatures from Celsius → Fahrenheit
let r2=temperatures.map(temp=>(temp*9/5)+32)
console.log(r2)

//calculate average temperature
let r3 = temperatures.reduce((acc,temp)=>acc+temp)
console.log(r3)
//first temperature above 40
let r4=temperatures.find(temp=>temp>40)
console.log(r4)
//5. findIndex() of temperature 28
let r5=temperatures.findIndex(temp=>temp==28)
console.log(r5)