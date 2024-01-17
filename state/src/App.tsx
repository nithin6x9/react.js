import { useMemo, useState } from 'react';

import { initialItems } from './util';

interface DemoProps {}

function Demo({}: DemoProps) {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items],
  );

  return (
    <div className='tutorial'>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
#heyyyyyy
#again hello
export default Demo;
/*
import { init}
function App(){ 
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Updated count: ",count);
        return() =>{
            console.log("I am being cleaned Up");
        };
    },[count]);


    function increment(){
        setCount(count+1);
    }

    return(
        <div>
            <h1>Incrementer/Decrementer{count}</h1>
            <button onClick = { ()=>{
                setCount(count-1);
            }}>Decrement</button><br></br><br></br>
            <button onClick = { ()=>{
                setCount(0);
            }}>Clear</button><br></br><br></br>
            <button onClick = {increment}>increment</button>
        </div>
    )
}

export default App*/