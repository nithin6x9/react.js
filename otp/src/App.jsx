import React from 'react'
import './App.css'


export default function App(){
    return <div>
        <Otp />
    </div>
}

function Otp(){
    return (<div className = "Main">
        <p className="head">login Via OTP</p>
        <input className = "input" type="text" placeholder="Enter yout mobile number" />
        <button className="butt" >Send OTP </button>
    
    </div>);
}