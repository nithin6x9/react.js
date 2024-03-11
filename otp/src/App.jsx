import React from 'react'
import './App.css'
import {RecoilRoot,useRecoilState,atom} from 'recoil'
import {otpState} from './store/atom/atom.jsx'


export default function App(){
    return <RecoilRoot>
        <Otp />
    </RecoilRoot>
}

function Otp(){
    const [code,setCode] = useRecoilState(otpState)
    return (<div className = "Main">
        <p className="head">login Via OTP</p>
        <input className = "input" type="text" placeholder="Enter yout mobile number" />
        <button className="butt" >Send OTP </button>
    
    </div>);
}