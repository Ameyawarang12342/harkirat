import "./App.css";
import { useState } from "react";

export default function App() {
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);
  function calcSum(input) {
    let result = 0;
    for (let i = 0; i <= input; i++) {
      result = result + i;
    }
    setSum(result);
  }
  return (
    <div>
      <input
        placeholder="Enter value"
        onChange={(e) => {
          // console.log(e.target.value);
          calcSum(e.target.value);
        }}
      ></input>
      <p>`Sum is {sum}`</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
    </div>
  );
}
