import { useState, useContext } from 'react'
import { CountContext } from './context'
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </>
  )
}

const Count = () => {
  return (
    <>
      <CountRenderer/>
      <Buttons />
    </>
  )
}

const CountRenderer = () => {
  const {count, setCount} = useContext(CountContext);
  return(
    <div>{count}</div>
  )
}

const Buttons = () => {
  const {count, setCount} = useContext(CountContext);
  return(
    <div>
      <button onClick={() => {
        console.log("Increase Count");
        setCount(prevCount => prevCount + 1);
        }
        }>Increase Count</button>
      <button onClick={() => {
        console.log("Decrease Count");
        setCount(prevCount => prevCount - 1);
        }}>Decrease Count</button>
    </div>
  )
}

export default App
