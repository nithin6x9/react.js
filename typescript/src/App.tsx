import React from 'react';

export default function App(){
    return(

        <>
        <Todo 
        title: Nithin
        description: he is noice guy
        done: false
        />
        </>
    ) 

}
interface TodoProp{
    title:string,
    description:string,
    done:boolean,
}

function Todo(props:TodoProp
){
    return <div>
        <h1>
            {props.title}
            </h1>

            <h2>
                {props.description}
                </h2>

        </div>

}