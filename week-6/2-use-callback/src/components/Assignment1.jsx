import { useCallback } from "react";
import { memo } from "react";
import { useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.
const PerfromComponent = memo(() => {
    console.log("fefe");
    return (
       <div></div>
    );
});

export function Assignment1() {
    const [count, setCount] = useState(0);
    const [dummyState, setDummyState] = useState(false); // New state variable

    // Your code starts here
    const handleIncrement = useCallback(() => {
        console.log("handleIncrement function called");
        setCount(prevCount => prevCount + 1);
    },[]);

    const handleDecrement = useCallback(() => {
        console.log("handleDecrement function called");
        setCount(prevCount => prevCount - 1);
    },[]);

    const handleButtonClick = () => {
        setDummyState(prevState => !prevState); // Toggle dummyState to trigger re-render
    };
    // Your code ends here

    console.log("Assignment1 component rendered");
    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
)
);
