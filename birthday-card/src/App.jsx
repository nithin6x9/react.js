import {useState} from 'react';

import './App.css'


export default function App() {
  return <div>
    <BirthdayCard />
  </div>
}
function BirthdayCard(){
    const [name,setName] = useState()
    const [value,storeValue] = useState()
    const handleInputChange = (event) => {
        setName(event.target.value);
    };
    const handleButtonClick = ()=>{
        storeValue(name);
    };

    return(
    <div className = "TopDiv">
        <p className="Name">Enter Your Name!</p>
        <div className="subDiv">
        <input className="Input-box" type = "text" placeholder="Enter your Name!" value={name} onChange={handleInputChange}></input><br />
        <button className="Button" onClick={handleButtonClick}>Done</button>
        
        </div>
    </div>
    )
}