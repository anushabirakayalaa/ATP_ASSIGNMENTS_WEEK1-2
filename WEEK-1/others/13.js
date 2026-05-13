let stud=[
    {sno:1,name:'ravi',age:21},
    {sno:2,name:'vikas',age:19},
    {sno:3,name:'manoj',age:15},
    {sno:4,name:'madhu',age:30},
];
let res1=stud.filter(studObj=>studObj.age<20)
console.log(res1)

//increment age by 2 yrs for manoj
let res2=stud.map(studObj=>{
    if(studObj.name==='manoj')
    {
        return studObj.age=studObj.age+2;
    }
})
console.log(res2)
//find sum of all ages of all students 
let sumOfAges= stud.reduce ((accumulator,studObj)=>accumulator)