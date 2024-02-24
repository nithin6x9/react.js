
import {useState} from 'react';
import {CountContext} from './context';

//Context API
//Reducer,useReducer 

//Recoil
function App(){

    const [count,setCount] = useState(0);
    return (
    <div>
    <CountContext.Provider value = {count}>

        <Count  count = {count}/>
        <Buttons count = {count} setCount={setCount}/>
    </CountContext.Provider>
    </div>
    )
}

function Count({count}){
    return <div>
        {count}
    </div>

}

function CountRenderer(){
    const count = useContext(CountContext);
    return <div>
        {count}
    </div>
}

function Buttons({count,setCount}){
    return <div>
        <button onClick = {()=>{
            setCount(count+1)
        }}
        >Increase</button>
        <button onClick={()=>{
            setCount(count-1)

        }}>Decrease</button>
    </div>

}

export default App;