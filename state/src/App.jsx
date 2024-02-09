import React,{Fragment,useState} from 'react';

function App(){
    const [todos,seTodos] = useState([{
        id:1,
        title:"go to gym",
        description:"ok"
    },{
        id:1,
        title:"go to gym",
        description:"ok"
    },{
        id:1,
        title:"go to gym",
        description:"ok"
    }]);
    function addTodo(){
        setTodos([...todos,{
            id:4,
            title:Math.random(),
            description:Math.random()
        }])
    }
    return(
        <div>
            <button onClick = {addTodo}>Add a TODO</button>
            {todos.map(todo => <Todo title = {todo.title} description={todo.description} />)}
        </div>
    )
}

function Todo({title,description}){
    return (
        <div>
        <h1>
            {title}
        </h1>
        <h5>
            {description}
        </h5>
        </div>
    )
}
export default App