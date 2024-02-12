import {useState,useEffect} from 'react'
import axios from "axios";
import './App.css'

function App(){

    const [todos,setTodos] = useState([]);
    useEffect(() => {
        fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(response){
            const json = await response.json();
            setTodos(json.todos)
        })
},[]);

    return(
        <>
            {todos.map(todo => <Todo title={todo.title} description = {todo.description} />)}
        </>
    )

}

function Todo({title,description}){
    return <div>
        <h1>
        {title}
        </h1>
        <h4>
        {description}
        </h4>
    </div>
}

export default App;