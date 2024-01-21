import { useState,useEffect } from 'react'
import './App.css'
/*
function App() {
  const [count, setCount] = useState(0)
    function add() {
        setCount(count+1);
    }
  return (
   <div className="counter">
    <h1>Count:{count}</h1>
    <button onClick={add}>Increment</button>
   </div>
  )
}

export default <App>*/

function App(){
    const [name, setName] = useState();
    function randi(){
        setName("Nithin");
        //setName("oomb eni ella xD!")

    }
    return(
        <>
            <button onClick={randi}>Click to make change</button>
            <h1>my name is {name}</h1>
        </>
    )}
export default App