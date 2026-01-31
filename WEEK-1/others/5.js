let emp={
    eno:1,
    name:"anu"

}

//accessing new props(dynamic)
emp.city="hyd"
emp.eno=123
console.log(emp)
//delete a prop dynamically
delete emp.name
console.log(emp)
//freeze an obj
Object.freeze(emp)
//resuability in java-->inheritance,composition

emp.en0=22
emp.mobile=7675816829
console.log(emp)
//read keys'
console.log(Object.keys(emp))
//read values
console.log(Object.values(emp))






















































 