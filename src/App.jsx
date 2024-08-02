import React from 'react'
import { useState } from 'react'

export default function App() {
  const [number, setNumber] = useState(1)

  function somar(){
    setNumber(number+2)
  }

  return (
    <div>
      <h1>Número: {number}</h1>
      <button onClick={somar}>Aumentar 2</button>
    </div>
  )
}
