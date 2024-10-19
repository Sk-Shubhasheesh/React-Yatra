import React from "react";
import { useState } from "react";
function App(){
  const [message, updateMessage] = useState('Hello user, good morning')
  const changeMessage = ()=>{
    updateMessage('Hello user, good afternoon')
  }
  return <>
    <div>{message}</div>
    <button onClick={changeMessage}>Change Message</button>
    </>

}
export default App;