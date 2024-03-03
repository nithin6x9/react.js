import {useContext,useState} from 'react'
import {CountContext} from "./context"

function App(){
    const [count,setCount] = useState();


    return (
        <>
        <CountContext.Provider value = {count}>
            <count setCount = {setCount} />
        </CountContext.Provider>
        </>
    )
}

function Count({setCount}){
    
    return <div>
        <CountRenderer />
        <Buttons  setCount = {setCount} />
    </div>

}