import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BusinessCard from './components/BusinessCard.jsx'
import './App.css'
import jsonData from './data/profiles.json';

function App() {
  const [count, setCount] = useState(0);
  const [ profiles, updateProfiles ] = useState([]);
  
  useEffect(() => {
    updateProfiles(jsonData);
  },[]);

  console.log(profiles);

  return (
    <div>
      {
          profiles.map((profile, index) => {
            return <BusinessCard key={index} profile={profile}/>
          }
        )
      }
    </div>
  );
}

export default App
