import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [inputValue, setinputValue] = useState('')
  function onclickHandler(){


  }

  return (
    <div>
    <input id="todo" type = "text" placeholder="Add your todo here!" value={inputValue}></input><br></br>
    <br></br>
    <button onClick={onclickHandler}>Add to your List!</button>
    </div>
  )
}

export default App
