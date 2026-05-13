let skills=['html','js','angular','java']
function findskill(skills,skill_name){
for(let a of skills){
    if(a==skill_name){
        return true
    }
}
return false
}
let result=findskill(skills,'java')
console.log(result)