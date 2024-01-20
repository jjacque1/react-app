import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }

  function decrementCounter() {
    setCounter((prevCounter) => prevCounter - 1)
    setCounter((prevCounter) => prevCounter - 1);
  }

  return (
    <div>
      <button onClick={decrementCounter}>-</button>
      {counter}
      <button onClick={incrementCounter}>+</button>
    </div>
  );
}

export default Counter;




// /**
//  * 1. Create a "Counter.jsx" component
//  * 2. Create a default `count` of 0
//  * 3. Create a button to increment 'count' by 1
//  * 4. Create a button to decrement 'count' by 1
//  * 5. Import your Counter in App.jsx and test it
//  */
