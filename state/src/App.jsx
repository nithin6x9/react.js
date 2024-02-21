import {useState,useEffect} from 'react'
import axios from 'axios'


function App(){
    return (
        <>
          <button onClick={() => {<Todo id={1} />}}>1</button>
          <button onClick={() => {<Todo id={2} />}}>2</button>
          <button onClick={() => {<Todo id={3} />}}>3</button>
          <button onClick={() => {<Todo id={4} />}}>4</button>
        </>
      );
}
function one(){

}

function Todo({id}){
    const[todo,setTodo] = useState({});

    useEffect(()=>{
        axios.get("https://sum-server.100xdevs.com/todo?id="+id)
        .then(response =>{
            setTodo(response.data.todo)
        })
    })
    return <div>
    <h1>
        {todo.title}
    </h1>
    <h4>
        {todo.description}
    </h4>
    </div>
}

export default App;