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
    const[todos,setTodos] = useState([{
        title:"Go to gym",
        description:"7-8",
        status:"True"
    },{
        title:"Study time",
        description:"9-10",
        status:"False"
    }]);
    function addtodo(){
        setTodos([...todos,{
            title:"new todo",
            description:"description of todo"
        }])
    }
    
    return(
        <div>
        {todos.map(function(todo){
            return <todo title={todo.title} description={todo.description}/>
        })}

        </div>
    )
}
/*
function Button(props){
    function onButtonClick(){
        props.setCount(props.count+1);
    }
    return <button onClick={onButtonClick}>Counter{props.count}</button>
}*/

export default App
/mmkm 
