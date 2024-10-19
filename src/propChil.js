import React from 'react'

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Component that uses "children" to render whatever is passed between its opening and closing tags
function MessageContainer(props) {
  return (
    <div>
      <h2>Message:</h2>
      <div>{props.children}</div> {/* This will render any children passed to MessageContainer */}
    </div>
  );
}
export {Greeting, MessageContainer}