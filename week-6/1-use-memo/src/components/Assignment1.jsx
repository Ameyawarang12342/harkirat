import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState();
    // Your solution starts here
    // const expensiveValue = 0;
    const expensiveValue = useMemo(() => {
        console.log("calculating expensiveValue...");
        // Base case: If n is 0 or 1, factorial is 1
        if (input === 0 || input === 1) {
        return 1;
        }
        // Variable to store the factorial
        let result = 1;
        // Iterate from n down to 1 and multiply each number
        for (let i = input; i >= 1; i--) {
            result *= i;
        }
        // Return the factorial
        return result;
    }, [input]);
    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}