import {useState,useEffect} from 'react'
import axios from 'axios'


function App(){
    const [inputValue,setInputValue]  = useState(0);
    const [sum,setSum] = useState(0);

    useEffect(()=>{
        if(inputValue>0){
            let sum = 0;
            for(let i = 1;i<=inputValue;i++){
                sum+=i;
            }
            setSum(sum)
        } 
    },[inputValue])
    return (
    <div>
    <input type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)} /><br /><br />

    <p>Sum: {sum}</p>
    </div>
    )
}

export default App;