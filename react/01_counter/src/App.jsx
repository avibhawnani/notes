import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = ()=>{
    if(count < 20){
      // setCount(count + 1);
      setCount(prevCount => prevCount+1)
      setCount(prevCount => prevCount+1)
      setCount(prevCount => prevCount+1)
      setCount(prevCount => prevCount+1)
      setCount(prevCount => prevCount+1)
    }
  }

  const subValue = ()=>{
    if(count>0){
      setCount(count - 1);
    }
  }

  return (
    <>
    <button onClick={addValue}>Increment</button>
    
    <h3>Counter : {count}</h3>

    <button onClick={subValue}>Decrement</button>
    </>
  )
}

export default App
