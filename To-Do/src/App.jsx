import './App.css'
import React,{ useState} from 'react'
/*
function App() {
  const [inputValue, setinputValue] = useState('')
  const handleInputValue = (event) =>{
    setinputValue(event.target.value)

  }
  
}
function onclickHandler(){
    
    

  return (
    <div>
    <input id="todo" type = "text" placeholder="Add your todo here!" value={inputValue} onchange={handleInputValue}></input>
    <br></br>
    <br></br>
    <button onClick={onclickHandler}>Add to your List!</button>
    </div>
  )
}

export default App*/
function App(){
    const[count,setCount]=React.useState(0)
    
    return(
        <div>
            <button count ={count} setCount={setCount}></button>

        </div>
    )
}
function Button(props){
    function onButtonClick(){
        props.setCount(props.count+1);
    }
    return <button onClick={onButtonClick}>Counter{props.count}</button>
}

export default App
