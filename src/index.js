import React from "react";
import ReactDOM from "react-dom";

//inject js inside the jsx - dynamiclly update element
const apiData =  "heelo from api data"
const isMorning = true

// const div = <div className="text">Hello from JSX</div>
const div = <div className="text">Hello Ji {apiData}</div>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)