import {useContext} from 'react'
import {CountContext} from "./context"
import {RecoilRoot,useRecoilState,useRecoilValue,useSetRecoilState} from "recoil";
import { countAtom } from './store/atoms/count';

function App(){

    return (
        <div>
        <RecoilRoot>     
            <Count />
        </RecoilRoot>
        </div>
    )
}

function Count(){
    console.log("Count Re-render")
    return <div>
        <CountRenderer />
        <Buttons />
    </div>

}
//function Input(){
//    const [inputValue,setInputValue] = useState("")

//}
function CountRenderer(){
    const count = useRecoilValue(countAtom);
    return <div>
        <b>
            {count}
        </b>
        <EvenCountRenderer />
    </div>
}
function EvenCountRenderer(){
    const count = useRecoilValue(countAtom)
    //if (count % 2==0){
      //  return <div>
        //    It is even
       // </div>
     return <div>
        {(count % 2 == 0)?"It is Even" : null}
     </div>
    }

function Buttons() {
    const setCount = useSetRecoilState(countAtom);
    console.log("Re-render")
    return <div>
        <button onClick = {()=>{
            setCount(count => count+1)
        }}>Increase</button>
        <button onClick = {()=>{
            setCount(count => count-1)
        }}>Decrease</button>
    </div>
}
/*
function Even({count}){
    if({count}%2==0){

    }
}*/

export default App
