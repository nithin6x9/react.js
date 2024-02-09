import { useEffect, useState } from "react"

function App() {
  const [id, setId] = useState(1);

  return (  
    <div>
      <button onClick={() => {
        setId(id +1);
      }}>Next</button>
      <Todo id={id} />
    </div>
  )
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async (res) => {
        const json = await res.json();
        setTodo(json.todo);
      })
  }, [id])

  return <div>
    <h2>
      {todo.title}
    </h2>
    <h5>
      {todo.description}
    </h5>
  </div>
}

export default App
/*Wrap
function App(){
    return <>
   <CardWrapper>
    Hi there
   </CardWrapper>
   <CardWrapper>
    <CardWrapper>
        <TextComponent />
    </CardWrapper>
   </CardWrapper>
</>
}

function CardWrapper({children}){
    return <div style = {{border:"2px solid black",padding:20}}>
        {children}
    </div>
}

function TextComponent(){
    return <div>
        hi there
    </div>
}
*/
