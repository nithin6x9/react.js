import {useEffect, useState } from 'react'

function App(){ 
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Updated count: ",count);
    },[count]);


    function increment(){
        setCount(count+1);
    }

    return(
        <div>
            <h1>Incrementer/Decrementer{count}</h1>
            <button onClick = { ()=>{
                setCount(count-1);
            }}>Decrement</button>
            <button onClick = { ()=>{
                setCount(0);
            }}>Clear</button>
            <button onClick = {increment}>increment</button>
        </div>
    )
}

export default App