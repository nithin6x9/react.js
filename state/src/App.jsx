import {useContext} from 'react'
import {CountContext} from "./context"

function App(){



    return (
        <>
            <count />
        </>
    )
}

function Count(){
    return <div>
        <CountRenderer />
        <Buttons />
    </div>

}
function CountRenderer(){
    const count = 0;
    return <div>
        <b>
            {count}
        </b>
    </div>
}
function Buttons() {
    const count = 0;
    return <div>
        <button onClick = {()=>{
            setCount(count+=1)
        }}>Increase</button>
        <button onClick = {()=>{
            setCount(count-=1)
        }}>Decrease</button>
    </div>
}
export default App()