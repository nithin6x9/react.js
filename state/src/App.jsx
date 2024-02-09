import React,{Fragment,useState} from 'react';

function App(){
    return <div>
    <CardWrapper innerComponent = {<TextComponent />} />
</div>
}

function CardWrapper(){
    return <div style = {{border:"2px solid black"}}>
        {innerComponent}
    </div>
}
function TextComponent(){
    return <div>
        hi there
    </div>
}

/*
const [count,setCount] = useState(4);
let counter = 4;
function App(){
    const [todos,setTodos] = useState([{
        id:1,
        title:"go to gym",
        description:"ok"
    },{
        id:2,
        title:"go to School",
        description:"ok"
    },{
        id:3,
        title:"go to Lab",
        description:"ok"
    }]);
    function addTodo(){
        setTodos([...todos,{
            id:counter++,
            title:Math.random(),
            description:'Random Number'
        }])

        const newtodos = [];
        for(let i = 0;i<todos.length();i++){
            newtodos.push(todos[i]);
        newtodos.push({
            id:4,
            title:Math.random(),
        })
        setTodos(newtodos)
        }
    }
    return(
        <div>
            <button onClick = {addTodo}>Add a TODO</button>
            {todos.map(todo => <Todo key = {todo.id} title = {todo.title} description={todo.description} />)}
        </div>
    )
}

function Todo({title,description}){
    return (
        <div>
        <h3>
            {title}
        </h3>
        <h5>
            {description}
        </h5>
        </div>
    )
}
export default App
*/