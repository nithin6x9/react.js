import { useState,useEffect ,Fragment} from 'react'
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
        setName(Math.random());
        //setName("oomb eni ella xD!")

    }
    return(
        <>
            <button onClick={randi}>Click to make change</button>
            <h1>My name is {name}</h1>
            <h2>Lol! i made it kudos</h2>
        </>
    )}
export default App