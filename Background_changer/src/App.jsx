
import React from 'react';
import {RecoilRoot,selector,useRecoilValue,useRecoilState} from 'recoil';
import './App.css'

function App() {
    return(
        <>
            <Change />
        </>
    )

}
function Change(){
    const [colour,setColour] = useState("white")
    return <div className="Change-butt">
        <button className="Red-button" onClick={()=>{
            setCount("red")
        }}>RED</button>
        <button className="Yellow-button" onClick={()=>{
            setCount("red")
        }}>YELLOW</button>
        <button className="Black-button" onClick={()=>{
            setCount("red")
        }}>BLACK</button>
        <button className="Purple-button" onClick={()=>{
            setCount("red")
        }}>PURPLE</button>
        <button className="Green-button" onClick={()=>{
            setCount("red")
        }}>GREEN</button>
        <button className="Blue-button" onClick={()=>{
            setCount("red")
        }}>BLUE</button>
        <button className="Default-button" onClick={()=>{
            setCount("red")
        }}>Default</button>

    </div>
}

export default App
