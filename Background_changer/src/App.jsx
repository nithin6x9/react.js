import React from 'react';
import {RecoilRoot,useRecoilState} from 'recoil';
import {color} from './store/atom/count.jsx';
import './App.css';

function App() {
  return (<RecoilRoot>

    <ColourButtons />
  </RecoilRoot>
  )
}
function ColourButtons(){
    const[backgroundColor,setBackgroundColor] = useRecoilState(color);
    return (
    <div style={{ backgroundColor: backgroundColor,minHeight: '100vh' }}>
    
      <div className="Change-butt">
        <button className="Red-button" onClick={()=>{
            setBackgroundColor("red");
        }}>RED</button>
        <button className="Yellow-button" onClick={() => {
          setBackgroundColor("yellow");
        }}>YELLOW</button>
        <button className="Black-button" onClick={() => {
          setBackgroundColor("black");
        }}>BLACK</button>
        <button className="Purple-button" onClick={() => {
          setBackgroundColor("purple");
        }}>PURPLE</button>
        <button className="Green-button" onClick={() => {
          setBackgroundColor("green");
        }}>GREEN</button>
        <button className="Blue-button" onClick={() => {
          setBackgroundColor("blue");
        }}>BLUE</button>
        <button className="Default-button" onClick={() => {
          setBackgroundColor("white");
        }}>Default</button>
      </div>
    </div>
)};

export default App;