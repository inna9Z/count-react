import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    return setCount((preState) => preState + 1)
  }

  const decrementHandler = () => {
    return setCount(0);
  }

  const resetHandler = () => {
    return setCount((preState) => preState - 1)
  }


  const countStyle = {
    color: count > 0 ? 'green' : count < 0 ? 'red' : 'blue',
  };

  return (
    <>

      <h1>Counter</h1>
      <h2 style={countStyle}>{count}</h2>
      <Button
        styling='green'
        text='Increment'
        handlerClick={incrementHandler}

      />
      <Button
        styling='blue'
        text='Reset'
        handlerClick={decrementHandler}
      />
      <Button
        styling='red'
        text='Decrement'
        handlerClick={resetHandler}
      />
    </>
  )
}

export default App
