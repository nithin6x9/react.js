import { useState } from 'react'
import './App.css'
function App() {
    const [count,setCount] = useState(0);

    function addOne(){
        setCount(count+1);
    }
  return (
    <div className="App">
        <button onClick={addOne}>count={count}</button>
    </div>
  )
}

export default App
