import { useEffect, useState } from 'react';

function useMousePointer(){
    const [pointer,setPointer] = useState({x:0,y:0});
    
    const handleMouseMove = (e) => {
        setPointer({x:e.clientX,y:e.clientY});
    }
    useEffect(()=>{
        window.addEventListener('mousemove',handleMouseMove);
        return ()=>{
            window.removeEventListener("mousemove",handleMouseMove);
        };
    },[])
    return pointer
};

function App() {
    const mousepointer = useMousePointer();
    return (
        <>
            Pointer is at {mousepointer.x} {mousepointer.y}
        </>
    )
}


export default App