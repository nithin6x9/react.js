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
    return(
        <React.Fragment>
            <Header title = "nick"></Header>
            <Header title = "nick2"></Header>
        </React.Fragment>
    )}
        function Header({title}) {
            return <div>
                {title}
            </div>
        }
export default App