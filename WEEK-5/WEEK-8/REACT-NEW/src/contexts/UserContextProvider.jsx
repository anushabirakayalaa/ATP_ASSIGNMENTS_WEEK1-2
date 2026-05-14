import React from 'react'
import {useState} from 'react'
import { CounterContext } from './CounterContext'
import {UserContext} from './UserContext'

function UserContextProvider({children}) {
    // state---
    const [name, setName] = useState('Ravi')
    const [age, setAge] = useState(20)
    const [email, setEmail] = useState('ravi@gmail.com')
    const changeUserState=()=>
    {
        setName("Anu")
        setAge(20)
        setEmail("anusha@gmail.com")
    }
  return (
     <UserContext.Provider value={{name,age,email,changeUserState}}>
        {children} 
        {/* all childeren of the specific component  */}
        </UserContext.Provider>
    
  )
}

export default UserContextProvider