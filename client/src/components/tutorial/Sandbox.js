import React, { useState } from 'react';

export default function Sandbox() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <section>
      <p className="d-block">You clicked {count} times</p>
      <button
        className="btn btn-outline-info d-block"
        onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </section>
  );
}