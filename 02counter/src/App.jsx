import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    let [counter,setCounter]=useState(15)

    const addValue=()=>{
      if(counter<27){
      counter=counter+1
      setCounter(counter)
      //doesnt increaser becaause of bunch 
      // setCounter(prevCounter => prevCounter+1)
      //it increses becoz of previous stat
      }
    }
    const removeValue=()=>{
      if(counter>0){
        counter=counter-1
        setCounter(counter)
      }
      
    }
  return (
    <>
     <h1> chai aur react </h1>
     <h2>counter value : {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br/>
     <button onClick={removeValue}>reamove value</button>
    </>
  )
}

export default App
