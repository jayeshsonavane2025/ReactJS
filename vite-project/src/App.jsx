import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  let counter = 50
  const addValue = () => {
    console.log(counter)
  }
  return (
    <>
      <h1>Hari Bol</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br/>
       <button>Remove Value</button>
    </>
  )
}

export default App
