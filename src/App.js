import React,{ useState, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default App;


/*
timerRef is used to store the interval ID without causing re-renders.
This allows you to keep track of the interval ID so you can clear it when needed without losing it between renders.

*/