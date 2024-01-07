import {useState} from "react";

function app(){
    const [count,setCount] = useState(0);
    
    function onclickHandler(){
        setCount(count+1);
    }
    return(<div>
        <button onclick={onclickHandler}>counter {count}</button>
    </div>)
}

export default App
