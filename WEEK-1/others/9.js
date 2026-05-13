//callback function-- a function send as arg to another function
function test1(a){
    console.log(a())
}
test1(function(){
    return 123;
})//{a:10}
 