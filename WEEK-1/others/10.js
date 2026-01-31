//array
let skills=['html','css','js']
//accessing array elem(destructiing)
let [a,b,c]=skills
//inserting:-
//atstart-push
//unshift-back
//splice--
skills.push('nodejs')//at start
console.log(skills)
skills.unshift('bootstrap')
console.log(skills)
skills.splice(2,0,'pyth')//index,deletecount,elem
console.log(skills)
//delete
 //at start-shift()
 //at end-pop()
 //splice-in btw
skills.shift()
console.log(skills)
skills.pop()
console.log(skills)
skills.splice(2,1)
console.log(skills)