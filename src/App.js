import React from 'react';
import { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  // 1. No Dependencies (Run After Every Render)
  // useEffect(() => {
  //   console.log('Effect runs after every render');
  // });



  // 2. Empty Dependency Array (Run Once, After Initial Render)
  // useEffect(() => {
  //   console.log('Effect runs only on mount (initial render)');
  // }, []);
  
  
  // 3.  Specific Dependencies (Run When Dependencies Change)
  // useEffect(() => {
  //   console.log(`Effect runs when "count" changes`);
  // }, [count]);

  
  // 4. Multiple Dependencies  - The effect will run whenever any of the dependencies change.
  useEffect(() => {
    console.log(`Effect runs when "count" or "name" changes`);
  }, [count, name]);
  


  return(
    <div>
      <p>{`You Click me ${count} times`}</p>
      <button onClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default App;