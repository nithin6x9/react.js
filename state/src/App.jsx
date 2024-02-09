import React,{Fragment,useState} from 'react';

//Wrap
function App(){
    return <>
   <CardWrapper>
    Hi there
   </CardWrapper>
</>
}

function CardWrapper({children}){
    return <div style = {{border:"2px solid black",padding:20}}>
        {children}
    </div>
}
/*
function TextComponent(){
    return <div>
        hi there
    </div>
}*/

export default App