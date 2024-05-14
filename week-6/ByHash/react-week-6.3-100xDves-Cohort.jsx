
import { useState } from "react";
import "./App.css";

function App() {
  const [bankData, setBankData] = useState({});
  const [exchangeData, setExchangeData] = useState({});

  useEffect(() => {
    const bankDataTimeout = setTimeout(() => {
      setBankData({ income: 100 });
    }, 3000);

    const exchangeDataTimeout = setTimeout(() => {
      setExchangeData({ returns: 53 });
    }, 1000);

    return () => {
      clearTimeout(bankDataTimeout);
      clearTimeout(exchangeDataTimeout);
    };
 }, []);

 useEffect(() => {
    if (bankData.income && exchangeData.returns) {
      const tax = (bankData.income + exchangeData.returns) * 0.3;
      setIncomeTax(tax);
    }
 }, [bankData, exchangeData]);

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
*/