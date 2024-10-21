import React, { useState, useRef, useCallback } from 'react';
import Chid from './use-callback';


const App = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const memorizeSetCountOneFunc = useCallback(() => setCount1(count1 + 1), [count1])

  const memorizeSetCountTwoFunc = useCallback(() => setCount2(count2 + 1), [count2])
  return (
    <>
      {count1} {count2}
      {/* <Chid text={'Button One'} onClick={()=>setCount1(count1+1)}/>
    <Chid text={'Button Two'} onClick={()=>setCount2(count2+1)}/> */}

      <Chid text={'Button One'} onClick={memorizeSetCountOneFunc} />
      <Chid text={'Button Two'} onClick={memorizeSetCountTwoFunc} />
    </>
  )

}

export default App;


/*
timerRef is used to store the interval ID without causing re-renders.
This allows you to keep track of the interval ID so you can clear it when needed without losing it between renders.

*/