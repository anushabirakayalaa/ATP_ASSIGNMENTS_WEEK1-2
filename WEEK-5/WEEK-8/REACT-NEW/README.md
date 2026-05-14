# STATE-MANAGEMENT (redux,Zustand)
1. Install zustand
    npm i zustand
2. create a global store








# useRef Hook
-useRef hook ---> used to  get the data from the real dom
# useEffect Hook
-useEffect hook ---> (crucial)  used for sideEffcets--(making api-calls, dom )

# Closure in JS
-Closure in JS  ---> 
   - (every function and component--has default of js function      which remembers the previous state)'
   - removed from call stact and stored in heap temporarily



1. //a function can stored in a variable 
2. //a function can send as arg to another function
3. //a function can return another function
    Example-1:
        function count()
        {
            let counter=0;
            return function(){
                counter++;
                retun counter;
            }
        }

        let x=counter //x will get function..after this the counter variable is killed not available for the 2nd time
        console.log(x()) //
        console.log(x()) //
        console.log(x()) //


        the reason to remember the previous values is called 
        
    Example-2:
        function sum(){
            let a=10
            return function (){
                let b=20;
                return a+b;
            };
        }

        let res=sum()
        console.log(res)
Note :- 


    Example-3:
        function getSum(b,...a ){//...a--rest parameters-{can recieve any no. of arguments and aslo pack them into an array and send them as o/p}
        //never place a normal parameneter after rest parameter...
        //rest parameters--{takes rest ofthe values}
            return a.reduce((x,y)=>x+y)
        }

        console.log(getSum(10,20,30)) //all extra args will be simply ignored its not cosidered as an error

        console.log(getSum(1,2,3,4))

        console.log(getSum(12,34,56,27,32,87,70))