import React, { useState, useEffect } from 'react';
// Remove the following line if you're not using it
// import { escapeComponent } from '../node_modules/uri-js/dist/esnext/uri';

function App() {
  const [render, setRender] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setRender(false);
    }, 1000); // Comma was missing here
  }, []);
  
  if (!render) {
    return (
      <div>
        {render ? <MyComponent /> : <div></div>}
      </div>
    );
  }

  function MyComponent() {
    useEffect(() => {
      console.error("Component mounted");
      return () => {
        console.log("Component Unmounted");
      };
    }, []);

    return (
      <div>
        from inside my escapeComponent
      </div>
    );
  }

  // Make sure you return something if render is true
  return <div>Loading...</div>;
}

export default App;
