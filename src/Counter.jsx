import { useState } from 'react'
import CountDisplay from './CountDisplay'

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <section className="text-center shadow m-5 p-3">
      <CountDisplay count={count} />
      <button 
        className="btn btn-primary me-2"
        onClick={ () => {setCount(count + 1)} }
        >
          Increment
      </button>
      <button 
        className="btn btn-outline-primary"
        onClick={ () => {setCount(count - 1)} }
        disabled = {count === 0 ? true : false}
        >
          Decrement
      </button>
    </section>
  )
}

export default Counter