import A from './components/A'
import B from './components/B'
import C from './components/C'
import React from 'react'

function App() {
  return (
    <div className='flex justify-around gap-9 mt-16 rounded-lg'>
      <A/>
      <B/>
      <C/>
    </div>
  )
}

export default App