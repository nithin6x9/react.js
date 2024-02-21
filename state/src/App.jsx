import {useState,useEffect,useMemo} from 'react'



function App(){
    const [inputValue,setInputValue]  = useState(0);
    const [counter,setCounter] = useState(0);

    let Count = useMemo(()=>{
        console.log("Memo got called")
        let finalCount = 0;
            for(let i = 1;i<=inputValue;i++){
                finalCount += i;
            }
            return finalCount;
    },[inputValue])
    return     <div>
    <input placeholder = {"Enter the number"} type = "text" value = {inputValue} onChange ={(e) => setInputValue(e.target.value)} /><br /><br />
    <button onClick={() => {setCounter(counter+1);}}>
      Click to sum the value from 1 to {inputValue} is {Count}
    </button>
    <p>Sum from 1 to {inputValue} is {Count}</p>
    </div>
}

export default App;