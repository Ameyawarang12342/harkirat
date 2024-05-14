import { useEffect, useRef, useState } from "react";

function App(){
  const [incomeTax, setIncomeTax] = useState(100000);
  const divRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10";
    }, 5000)
  },[])
  return (
    <div>
      Hi your income tax for current fin year is <div ref={divRef}>{incomeTax}</div>
      </div>
  )
}

export default App;