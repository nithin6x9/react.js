import {useState,useEffect} from 'react';
//import {RecoilRoot,useRecoilState,useRecoilValue} from 'recoil';
//import {wordsCount} from './store/atom/count.jsx'
import './App.css'

function App() {

    return <div>

        <Para />
    </div>

}
function Para(){
    const [count,setCount] = useState()
    const [storeValue,setStoreValue] = useState()

    useEffect(()=>{
        
    })


    const handleInputChange = (event)=>{
        setCount(event.target.value);
    };


    const handleButtonClick = ()=>{
        setStoreValue(count);
        console.log('input value: ${count}')
    }


    return <div className="para-gen">
        <p className="para">Para Generator</p>
        <input className="input" type="text" value={count} onChange={handleInputChange} placeholder="Ente number of words" />
        <button className="button" onClick={handleButtonClick}>Generate</button>
        <div>{storeValue}</div>
    </div>

}

export default App;
