import { useState } from 'react'

export const Button = () => {
  
  // let counter = 0
  const [counter, setCounter] = useState(0)

  function increment() {
    // counter++;
    setCounter(counter + 1)

    console.log(counter);
    
  }

  return (
    <button onClick={increment}>
      {counter}
    </button>
  )
}
