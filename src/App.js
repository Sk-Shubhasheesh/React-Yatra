import React, { useRef } from 'react';

function App() {
  // Create a ref using the useRef hook and set its initial value to null
  const inputRef = useRef(null);

  // Function to focus the input field when the button is clicked
  const handleFocus = () => {
    // Check if the ref has the current DOM node (input field) attached
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element
    }
  };

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}


export default App;