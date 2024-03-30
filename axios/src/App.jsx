import { useState } from 'react'
import './App.css'

function App() {
    fetch("https://sum-server.100xdevs.com/todos").then(async(response)=>{
        const json = await response.json();
        console.log(json.todos.length);
    })
}

export default App
