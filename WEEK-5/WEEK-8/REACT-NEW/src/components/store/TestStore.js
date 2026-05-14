// CREATING THE GLOBAL STORE
import {create } from 'zustand'

// create store
export const useTest=create((set)=>({
    // state
    x:10,
    y:20,
    user:{
        name:"anusha",
        age:21
    },
    // functions to modify the state
    incrementX:()=>set((state)=>({x:state.x+1})),
    decrementX:()=>set((state)=>({x:state.x-1})),
    incrementY:()=>set((state)=>({y:state.y+1})),
    // doubleX:()=>set((state)=>({x:state.x+x}))
    incrementXByValue:(v)=>set((state)=>({x:state.x+v})),
    updateUser:(newName)=>set((state)=>({user:{...state.user,age:30,name:newName}}))
}))
// set-->set the val.....get-->get the values