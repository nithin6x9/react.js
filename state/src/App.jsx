import {react} from "react";
import {useContext} from 'react'
import {CountContext} from "./context"
import {RecoilRoot,useRecoilState,useRecoilValue,useSetRecoilState} from "recoil";
import { countAtom,countTodo } from './store/atoms/count';
import {evenSelector} from './store/atoms/count';

function App(){
    return(<RecoilRoot>
        <Todo />
    </RecoilRoot>
    );
}
function Todo(){
    const [todo,setTodo] = useRecoilState(countAtom)
  //  const [tododescription,setTodoDescription] = useRecoilState(countTodo)

    const onChange =({target:{value}}) => {
        setTodo(value)

    }

        return <div>
            <input type="text" placeholder="Enter your todo" value ={todo} onChange = {(e)=>setTodo(e.target.value)} /><br></br>
            <input type="text" placeholder="To-Do Desctription if you have:)" value ={tododescription} onChange = {(e)=>setTodoDescription(e.target.value)} /><br></br>
            <button>Click to update your To-Do</button>
        </div>
} 


export default App
