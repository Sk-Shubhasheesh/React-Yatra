import React from "react";
import { FruitList, StudentList } from "./renderDataList";

function App(){
  return(
    <div>
      <h1>Fruit List</h1>
      <FruitList /> {/* Renders the list of fruits */}
      <h1>Student List</h1>
      <StudentList />
    </div>
  )
}
export default App;