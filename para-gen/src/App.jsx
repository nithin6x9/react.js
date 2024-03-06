import React from 'react';
import {RecoilRoot,useRecoilState,useRecoilValue} from 'recoil';
import {wordsCount} from './store/atom/count.jsx'
import './App.css'

function App() {

    return (<RecoilRoot>

        <Para />
    </RecoilRoot>)
}
function Para(){
    const [count,setCount] = useRecoilState(wordsCount)
    const handleInputChange = (event)=>{
        setCount(event.target.value);
    };
    const handleButtonClick = ()=>{
        console.log('input value: ${count}')
    }
    return <div className="para-gen">
        <p className="para">Para Generator</p>
        <input className="input"  value={count} onChange={handleButtonClick} placeholder="Ente number of words"></input>
        <button className="button">Generate</button>
    </div>

}

export default App;
