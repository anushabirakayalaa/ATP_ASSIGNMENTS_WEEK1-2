import React, { useEffect } from 'react'
import { useContext,useRef } from 'react'
import {CounterContext} from '../contexts/CounterContext.js'
// import {UserContext} from '../contexts/UserContext.js'

function A() {

  let inputRef=useRef(null)
  // directly accessing elements from the dom...but not in virtual dom
  let {counter1,changeCounter1,counter2,changeCounter2,name,age,email,changeUserState}=useContext(CounterContext)
  console.log("Component A rendered")

  useEffect(()=>{
    // side effects
      // focus
    inputRef.current.focus()
},[])


  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>Componet A</p>
        <p className='text-2xl mt-10'>Counter1:{counter1}</p>
        <p className='text-2xl mt-10'>Counter2:{counter2}</p>
        <button onClick={changeCounter1} className='bg-blue-400 p-2 mt-10 me-10'>Change Counter 1</button>
        <button onClick={changeCounter2} className='bg-blue-400 p-2  mt-10'>Change Counter 2</button>
        <button onClick={changeUserState} className='bg-blue-400 p-2  mt-10'>Change User</button>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Email:{email}</p>

        <input ref={inputRef} type='text' className=' border-4 my-5 '/>

    </div>
  )
}
export default A

