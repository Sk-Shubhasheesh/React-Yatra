import React from "react";
import { FruitList, StudentList, StudentInfo } from "./renderDataList";

function App(){
  const student = {
    id: 1,
    name: "John Doe",
    age: 20,
    course: "Computer Science",
    year: 2
  };

  return(
    <div>
      <h1>Fruit List</h1>
      <FruitList /> {/* Renders the list of fruits */}
      <h1>Student List</h1>
      <StudentList />
      <h1> Rendering Data from an Object Passed via Props</h1>
      <StudentInfo student={student} />
    </div>
  )
}
export default App;