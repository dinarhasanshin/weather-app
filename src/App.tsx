import React, { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <button className="btn__up" onClick={ ()=>{ setCount( count + 1 ) } }>-</button>
      <p>{ count }</p>
      <button className="btn__down" onClick={ ()=>{ setCount( count - 1 ) } }>+</button>
    </div>
  );
}

export default App;
