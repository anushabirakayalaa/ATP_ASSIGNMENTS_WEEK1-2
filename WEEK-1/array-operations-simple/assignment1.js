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
let filteredTemps=temperatures.filter(temp=>temp>35)
console.log(filteredTemps)

//covert all temperatures from Celsius → Fahrenheit
let fahrenheitTemps=temperatures.map(temp=>(temp*9/5)+32)
console.log(fahrenheitTemps)

//calculate average temperature
let sum = temperatures.reduce((acc,temp)=>acc+temp)
let averageTemp=sum/temperatures.length
console.log(averageTemp)
//first temperature above 40
let r1=temperatures.find(temp=>temp>40)
console.log(r1)
//5. findIndex() of temperature 28
let r2=temperatures.findIndex(temp=>temp==28)
console.log(r2)