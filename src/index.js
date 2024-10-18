import React from "react";
import ReactDOM from "react-dom";

//inject js inside the jsx - dynamiclly update element
// const apiData =  "heelo from api data"


// const div = <div className="text">Hello from JSX</div>
// const div = <div className="text">Hello Ji {apiData}</div>

                                             // Conditional Rendering
const isMorning = false
const morningText = "Good Morning User"
const afternoonText = "Good after noon User"
// const div = <div className="text">{isMorning ? morningText:afternoonText}</div>

// IF we want to put some value with conditonal rendering
const morningElement = <div>{morningText} <span>it is 8am</span></div>
const eveningElement = <div>{afternoonText} it is 4pm</div>
const div = isMorning ? morningElement : eveningElement
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(div)