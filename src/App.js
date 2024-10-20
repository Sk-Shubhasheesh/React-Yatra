import React, { useRef } from 'react';
import { useState } from 'react';



const App = ()=>{
  let myLocal = 0
  const ref = useRef(0)
  const [myCount, setCount] = useState(0)
  return <>
  <button onClick={() => {myLocal+= 1}}>Change Local Variable</button>
   <button  onClick={() => {ref.current+= 1}}>Change Ref</button>
   <button  onClick={() => {setCount(myCount+1)}}>Change State</button>

   <div>
    <span>Local var: {myLocal}</span><br/>
    <span>ref: {ref.current}</span><br/>
    <span>state variable: {myCount}</span><br/>
   </div>
  </>

}

export default App;