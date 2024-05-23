import React, { useState } from "react";

export default function Badhon() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Badhon</p>

      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      </div>
    </div>
  );
}
