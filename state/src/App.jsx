import {useState,memo} from 'react'

function App(){
        const [count,setCount] = useState(0);

        function onClick(){
            console.log("Clicked");
        }

        return <div>
            <Child onClick={onClick} />
            <button onClick={() => {
                setCount(count+1);
            }}>Click me</button>
        </div>
}

const Child = memo(({onClick}) => {
    console.log("Child render")

    return <div>
        <button onClick = {onClick}>Button Clicked</button>
    </div>
})

export default App;