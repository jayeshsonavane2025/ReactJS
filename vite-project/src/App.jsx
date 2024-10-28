import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

function App() {
  let [counter,setCounter]=useState(0)
  //let counter = 0
  const addValue = () => {
    setCounter(counter+1)
    console.log(counter)
  }
  const decValue = () => {
    if(counter>0)setCounter(counter-1)
    console.log(counter)
  }
  return (
    <>
      <h1>Hari Bol</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br/>
       <button onClick={decValue}>Remove Value</button>
    </>
  )
}

export default App
