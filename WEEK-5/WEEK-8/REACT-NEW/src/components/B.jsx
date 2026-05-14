import { useContext, useState } from 'react'
import {CounterContext} from '../contexts/CounterContext.js'
import {useTest} from './store/TestStore.js'
import React from 'react'
function B() {
  const x=useTest(state=>state.x)
  const incrementX= useTest(state=>state.incrementX)
  const incrementXByValue = useTest(state=>state.incrementXByValue)


  let {counter1,changeCounter1,counter2,changeCounter2}=useContext(CounterContext)
  console.log("Component B rendered")
  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>Componet B</p>

        {/* state */}
        <p className='text-2xl mt-10'>X: {x}</p>
        <button onClick={incrementX} className='bg-blue-400 p-2 mt-10 me-10'>Increment X</button>

        <button onClick={incrementXByValue} className='bg-blue-400 p-2 mt-10 me-10'>Increment X By value</button>

        <p className='text-2xl mt-10'>Counter1:{counter1}</p>
        <p className='text-2xl mt-10'>Counter2:{counter2}</p>
        <button onClick={changeCounter1} className='bg-blue-400 p-2 mt-10 me-10'>Change Counter 1</button>
        <button onClick={changeCounter2} className='bg-blue-400 p-2  mt-10'>Change Counter 2</button>
    </div>
  )
}

export default B