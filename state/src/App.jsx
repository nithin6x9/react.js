import React,{Fragment,useState} from 'react';

function App(){
    const [title,setTitle] = useState("Hola");
    return(
        <div>

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