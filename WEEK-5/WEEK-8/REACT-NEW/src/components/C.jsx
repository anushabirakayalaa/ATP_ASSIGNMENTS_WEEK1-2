import { useContext, useState } from 'react'
import {CounterContext} from '../contexts/CounterContext.js'
import { useTest } from './store/TestStore.js'
import React from 'react'

function C() {
  // get state from Zustand store
  // const {y,incrementY,decrementY}=useTest(state=>({state.y,state.incrmenty})) //{x:10,y:20}
  const y=useTest(state=>state.y)
  const incrementY= useTest(state=>state.incrementY)
  const incrementXByValue= useTest(state=>state.incrementXByValue)
  // state


  let {counter1,changeCounter1}=useContext(CounterContext)
  console.log("Component C rendered")
  return (
    <div className='text-center shadow-2xl p-10'>
        <p className='text-3xl'>Component C</p>
        {/* state */}
        <p className='text-2xl mt-10'>Y: {y}</p>
        <button onClick={incrementY} className='bg-blue-400 p-2 mt-10 me-10'>Increment Y</button>
        <button onClick={incrementXByValue} className='bg-blue-400 p-2 mt-10 me-10'>Increment X by values</button>



        <p className='text-2xl mt-10'>Counter1:{counter1}</p>
        {/* <p className='text-2xl mt-10'>Counter2:{counter2}</p> */}
        <button onClick={changeCounter1} className='bg-blue-400 p-2 mt-10 me-10'>Change Counter 1</button>
        {/* <button onClick={changeCounter2} className='bg-blue-400 p-2  mt-10'>Change Counter 2</button> */}
    </div>
  )
}

export default C