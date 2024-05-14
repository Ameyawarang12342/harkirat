import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { useMemo } from "react";
import { memo } from "react";
import { useCallback } from "react";

function App() {
  // const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const a = useCallback(() => {
    console.log("hello there!");
  }, []);

  let sum = useMemo(
    function () {
      console.log("JK");
      let result = 0;
      for (let i = 0; i <= inputValue; i++) {
        result = result + i;
      }
      return result;
    },
    [inputValue],
  );

  return (
    <div>
      <Demo a={a}></Demo>
      <div>
        <input
          placeholder="Enter value"
          onChange={(e) => {
            // console.log(e.target.value);
            setInputValue(e.target.value);
          }}
        ></input>
        <p>Sum is {sum}</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Counter {count}
        </button>
      </div>
    </div>
  );
}
const Demo = memo(function ({ a }) {
  console.log("rerendering");
  return <div>Hello {a}</div>;
});

export default App;

// In this code, we have used the useMemo hook to memoize the sum calculation.
// Also, we have used the useEffect hook to log a message to the console every time the count state changes.
// Here, when we passed the fn a into the child 'demo' component, each time when the state variable changes, the child demo component is re-rendered although the fn a is not changed. This re-rendering is not really needed and to avoid these kind of re-rendering we can use useCallback hook. useCallback can be used to memoize the fn a.
// In this version, we're using useCallback to avoid unnecessary re-renders happening due to referential changes of the fn when the components getting rendered again when state changes.