import { useState } from 'react'

function App() {
    const [count,setCount] = useState(0);

    function addOne(){
        count++;
    }
  return (
    <div className="App">
        <button onClick={addOne}>count={count}</button>
    </div>
  )
}

export default App
