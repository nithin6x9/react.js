import { useEffect, useState } from 'react';
//useDimenesion hook to find the height and width of the browser 
function useInterval(){
    const [count, setCount] = useState(0);
    
    useInterval(() => {
      setCount(c => c + 1);
    }, 1000)

}

function App() {
  
    return (
      <>
        Timer is at {count}
      </>
    )
  }
  
  export default App