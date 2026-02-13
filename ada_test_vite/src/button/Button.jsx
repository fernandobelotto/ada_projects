import React, { useState } from 'react'

export default function Button() {

  const [count, setCount] = useState(0)

  const increase = () => setCount(count + 1)

  return (
    <>
      <p data-testid='value'>counter is: {count}</p>
      <button onClick={increase}>increase</button>
    </>
  )
}
