import React from 'react'
import { useState } from 'react'

export default function Count() {
  const [count, setCount] = useState(100);
   
  function Add(){
    setCount(count + 1);
  }

  function Subtract(){
    setCount(count - 1);
  }

  return (
    <div style={{padding:10, display:'flex', marginRight:10, marginLeft:10}}>
      <button onClick={Add}>+</button>
      <span>{count}</span>
      <button onClick={Subtract}>-</button>
    </div>
  )
}
