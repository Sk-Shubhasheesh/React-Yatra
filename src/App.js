
import React from "react";
import { Greeting, MessageContainer } from "./propChil";
// Parent component that uses both Greeting with props and MessageContainer with children
function App() {
    return (
      <div>
        {/* Passing a "name" prop to Greeting */}
        <Greeting name="John" />
        
        {/* Passing children to MessageContainer */}
        <MessageContainer>
          <p>This is the content passed as children!</p>
          <p>React allows us to pass JSX between components like this.</p>
        </MessageContainer>
      </div>
    );
  }
  export default App;