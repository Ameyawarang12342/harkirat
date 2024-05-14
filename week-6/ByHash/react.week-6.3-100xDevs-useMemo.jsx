
import { useState, useEffect, useMemo } from "react";
import "./App.css";

function App() {
  const [bankData, setBankData] = useState({});
  const [exchangeData, setExchangeData] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [incomeTax, setIncomeTax] = useState(0);

  useEffect(() => {
    const bankDataTimeout = setTimeout(() => {
      setBankData({ income: 100 });
    }, 5000);

    const exchangeDataTimeout = setTimeout(() => {
      setExchangeData({ returns: 100 });
    }, 1000);

    const exchangeData2Timeout = setTimeout(() => {
      setExchangeData2({ returns: 100 });
    }, 1000);

    return () => {
      clearTimeout(bankDataTimeout);
      clearTimeout(exchangeDataTimeout);
      clearTimeout(exchangeData2Timeout);
    };
 }, []);

 const cryptoReturns = useMemo(() => {
  console.log("Inside useMemo");
  return exchangeData.returns + exchangeData2.returns;
 }, [exchangeData, exchangeData2]); 

 useEffect(() => {
    if (bankData.income && cryptoReturns) {
      const tax = (bankData.income + cryptoReturns) * 0.3;
      setIncomeTax(tax);
    }
 }, [bankData, exchangeData, exchangeData2]);

  return (
    <div>
      <h4>Hi There! Your income tax returns are {incomeTax}%.</h4>
    </div>
  );
}
export default App;

// The aim of this coding pracitce is to understand the useEffect in react. Here, in this code... when it's runnning the webpage displays the value of returns as 'NaN' because the bankData and the exchangeData is not recieved before the page is getting loaded. When both these data gets updaated after a few seconds then the state changes and shows the correct returns. Also the rendering is happening continuosly as the states are getting updated frequently because of the timers. Infinitely clocks are getting started and you're getting data.

/*
In this optimized version:

Initial State for incomeTax: We initialize incomeTax with 0 to avoid displaying NaN before the data is loaded.
First useEffect Hook: This hook is used to set up the initial data fetching. It sets up two timeouts to simulate fetching data from a bank and an exchange. The timeouts are cleared when the component unmounts to prevent memory leaks.
Second useEffect Hook: This hook is used to calculate the incomeTax whenever bankData or exchangeData changes. It checks if both bankData.income and exchangeData.returns are available before performing the calculation. This ensures that the calculation is only performed after both pieces of data have been loaded.
This approach ensures that the calculation for incomeTax is only performed after the necessary data has been loaded, and it avoids unnecessary re-renders by only updating the state when the data changes.


In the provided React code, useMemo is used to optimize the calculation of cryptoReturns, which is the sum of exchangeData.returns and exchangeData2.returns. Let's break down how useMemo skips some computations between re-renders.

How useMemo Works:
useMemo is a hook in React that returns a memoized value. It takes a function as its first argument and an array of dependencies as its second argument. The function provided to useMemo is only re-executed when one of the dependencies has changed. If the dependencies have not changed between re-renders, useMemo will return the cached value without re-executing the function.

In the code:
We define a memoized value cryptoReturns using useMemo.
The function provided to useMemo calculates the sum of exchangeData.returns and exchangeData2.returns.
The dependencies array [exchangeData, exchangeData2] specifies that the memoized value should be recalculated only when exchangeData or exchangeData2 changes.

Optimization Impact:
Initial Render: When the component is initially rendered, the cryptoReturns value is calculated once since both exchangeData and exchangeData2 are initially empty objects.
Subsequent Renders: After the initial render, if only exchangeData or exchangeData2 changes, the function inside useMemo is not re-executed. Instead, useMemo returns the cached cryptoReturns value from the previous render, avoiding unnecessary calculations. This is because useMemo detected that the dependencies have not changed, so it returns the cached result.
Avoid Unnecessary Computations: The console.log("Inside useMemo") statement helps us track when the cryptoReturns calculation is actually executed. You'll notice that after the initial render, this log statement won't be printed again unless exchangeData or exchangeData2 changes, demonstrating the optimization achieved by useMemo.

Conclusion:
By using useMemo, the code avoids unnecessary recalculations of cryptoReturns during re-renders when the dependencies exchangeData and exchangeData2 remain unchanged. This optimization can help improve the performance of React components by reducing unnecessary computations and rendering cycles.
*/