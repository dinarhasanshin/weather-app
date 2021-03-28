import React, { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="counter">
        <span>{ count }</span>
        <button className="btn__up" onClick={() => { setCount(count + 1) }}>+</button>
      </div>
    </div>
  );
}

export default App;
