import {useState,useEffect} from 'react'
import axios from 'axios'


function App(){
    const [inputValue,setInputValue]  = useState(0);
    const [sum,setSum] = useState(0);
    const [finalValue,setFinalValue] = useState(0);

    useEffect(()=>{
        if(inputValue>0){
            let sum = 0;
            for(let i = 1;i<=inputValue;i++){
                sum+=i;
            }
            setSum(sum)
        } 
        setFinalValue(sum);
    },[inputValue])
    return (
    <div>
    <input placeholder = {"Enter the number"} type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)} /><br /><br />
    <button onClick={() => setInputValue(parseInt(inputValue))}>
      Click to sum the value from 1 to {inputValue}
    </button>
    <p>Sum from 1 to {inputValue} is {finalValue}</p>
    </div>
    )
}

export default App;