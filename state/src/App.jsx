import { useState } from 'react'
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
        <div>
            <Headerwithbutton />
            <h2>Lol! i made it kudos</h2>
 
        </div>
    )}
    function Headerwithbutton(){
    const [firsttitle, setfirsttitle] = useState("My name is Nithin krishna");
    function changetitle(){
        setfirsttitle("My name is "+Math.random());
        //setName("oomb eni ella xD!")
    }
    return<>
        <button onClick={changetitle}>Click to change Name</button>
        <Header title={firsttitle} />
    </>
    }
    function Header({title}) {
        return <div>
           <br></br> {title}
        </div>
    }
export default App