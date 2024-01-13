import { useState } from 'react'
//import './App.css';

function NameList(){
    const [list,setList] = useState(["Jack","Nithin","Jhon"]);
    const [name,setName] = useState(" ");

    return(
        <div>
            <ul>
                {list.map((name)=>{
                    <li key = {name}>{name}</li>
                })}
            </ul>
            <input 
            type = "text"
            value = {name}
            onchange = {(e) => setName=(e.target.value)} />
        </div>
    );
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
