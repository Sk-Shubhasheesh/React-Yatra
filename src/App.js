import React from "react";
import Button from "./Button";
const App = ()=>{
    const HandleclickAction = ()=>{
        console.log("I was clicked from parent");
        
    }
    return <Button clickAction={HandleclickAction}>Click me</Button>
}

export default App;

