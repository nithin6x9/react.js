import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const ChangeBackground=()=>{
        setBackgroundColor('red');
    }
  return (
    <div style={{ backgroundColor: backgroundColor,minHeight: '100vh' }}>
    
      <div className="Change-butt">
        <button className="Red-button" onClick={ChangeBackground}>RED</button>
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
  );
}

export default App;