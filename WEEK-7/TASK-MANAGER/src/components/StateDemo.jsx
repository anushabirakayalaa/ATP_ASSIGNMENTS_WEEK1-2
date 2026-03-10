import { useState } from "react";
//importing useState hook from react library---what it does? 
function StateDemo(){

//states
    let [counter,setCounter] = useState(10)
    //if we xhange array / ob then definetly we need to chnage the copy f it then only react understands
    let [marks,setMarks] = useState([1,2])
    let [user,setUser] = useState({email:"test@mail.com",age:"22"})
    const increment =()=>
    {
        setCounter(prev=>prev+1) //setCounter(counter+1) ---used only when not bothered about the previous values and only inetntio is to inment the counter by 1
        setCounter(prev=>prev+1)//it will re-render the component and update the value of counter in UI
         setCounter(prev=>prev+1)
    }
    const decrement =()=> 
    {   
        setCounter(counter-1) //it will re-render the component and update the value of counter in UI
    }
    const reset =()=>
    {
        setCounter(0)
    }

    const addmark =()=>
    {
        //marks.push(312) //it will not re-render the component and update the value of marks in UI--instead we need tro create a copy
        setMarks([...marks, 312])
        // setMarks([123,...marks]) ///insert at beginning
        // setMarks([...marks.slice(0,1),900])
    }
    //updating a object 
    const updateUser =()=>
    {
        setUser({...user,city:"Hyd" })
    }
    //delete property
    const deleteProperty=()=>
    {
        let {age,...rest}=usersetUSer(rest)
    }
    console.log(Object.entries(user))

    //update marks state at begining 
    // and ending and 
    // in between in index
    //delete marks from the end of the array
    const deleteMark=(index)=>
    {
        let res=marks.filter((_,i)=>i!=index) //((_,i)) ===> ((marks,i))
        setMarks(res)
        //setMark
    }

    return(
        <div>
            <p className="text-4xl mt-10">
                Counter : {counter}
            </p>
            <button onClick={increment} className="bg-blue-300 px-5 py-2 mt-5 mr-5">+</button>
            <button onClick={decrement} className="bg-blue-300 px-5 py-2 mt-5 mr-5">-</button>
            <button onClick={reset} className="bg-red-300 px-5 py-2 mt-5 mr-5">Reset</button>
            <h1>Marks</h1>
            {
                marks.map((mark,index)=><p key={index}>{mark}</p>)

            }
            <button onClick={addmark} className="bg-green-300 px-5 py-2 mt-5 mr-5">Add Mark</button>
                <h1>User</h1>   
                <p>Email:{user.email}</p>
                <p>City:{user.city}</p>
                <p>Age:{user.age}</p>
                <button onClick={updateUser} className="bg-yellow-300 px-5 py-2 mt-5 mr-5">Update User</button>
                <button onClick={deleteMark} className="bg-yellow-300 px-5 py-2 mt-5 mr-5">delete mark</button>
                <button onClick={deleteProperty} className="bg-yellow-300 px-5 py-2 mt-5 mr-5">delete age</button>
                
                {/* <h1>User</h1>
                {
                    Object.values(user).map((v,index)={
                        <p
                    })
                } */}
        </div>
    )
}
export default StateDemo;

//arr.filter(())
//obj.keys()
//obj.values()
//obj.entries---key,value pairs