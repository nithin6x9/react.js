import { useState } from 'react'
import './App.css';

function NameList(){
    const [List,setList] = useState(["Jack","Nithin","Jhon"]);
    return(
        <div>
            <ul>
                {List.map((name)=>{
                    <li key = {name}>{name}</li>
                })}
            </ul>
        </div>
    );i
}

function Counter() {
    let [count,setCount] = useState(0);

    function addOne(){
        setCount(count+1);
    }
  return (
    <div>
        <button onClick={addOne}>count={count}</button>
    </div>
  )
}
function App(){
    return(
        <div>
            <Counter />
            <NameList />
        </div>
    )
}
export default App
