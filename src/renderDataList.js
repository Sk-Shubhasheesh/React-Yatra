// Rendering a List of Items
import React from "react";

const fruits = ["Apple", "Banana", "Cherry", "Date"];

// component to render list
function FruitList(){
    return (
        <ul>
          {
            fruits.map((fruit, index)=>(
                <li key={index}>{fruit}</li> // // Using map to create <li> for each fruit
            )
        )
          }
        </ul>
    )
}

// Rendering a List of Objects
const students = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Alice", age: 22 },
    { id: 3, name: "Bob", age: 21 }
  ];

function StudentList(){
    return (
    <ul>
        {students.map(student => (
                <li key={student.id}>
                 {student.name} - Age: {student.age}
                </li>
        ))
        }
    </ul>
    )
}

// Rendering Data from an Object Passed via Props
function StudentInfo(props) {
  const { name, age, course, year } = props.student; // Destructure the object from props

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export {FruitList, StudentList, StudentInfo}