import { useState } from "react"
import Button from "./components/Button";


function App() {
  const [color,setColor]=useState("olive")
  const handleButtonClick=(props)=>{
    setColor(props);
  }

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12
        inset-x-0 px-2">
          <div className="flex flex-wrap justify-center
          gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <Button color="red" onClick ={() => handleButtonClick("red")} className="outline-none px-4 text-white shadow-lg"style={{backgroundColor:"red"}}/>
        <Button color="green" onClick ={() => handleButtonClick("green")} className="outline-none px-4 text-white shadow-lg"style={{backgroundColor:"green"}}/>
        <Button color="blue" onClick ={() => handleButtonClick("blue")} className="outline-none px-4 text-white shadow-lg"style={{backgroundColor:"blue"}}/>
        <Button color="black" onClick={() => handleButtonClick("black")}/>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
