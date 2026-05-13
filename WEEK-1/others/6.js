let test={
    a:10,
    b:20,
    c:30
}
//unpack obj (destructing)
let {x,b,c}=test;
console.log(x)
//console.log(b)
//console.log(c)
let {a}=test;
console.log(a)
//complex obj
let student={
    sno:100,
    name:'anu',
    marks :[90,89,65],
    address:{
        city:'hyd',
        pincode:500026
    },
    getData:function(){
        //obj procc=essu=ing bussiness logic
        console.log("hello")
    }
}
console.log(student.marks[0])
console.log(student.address.city)
console.log(student.getData())
getAverage:function(){
    //find avg marks of student and return
    
}