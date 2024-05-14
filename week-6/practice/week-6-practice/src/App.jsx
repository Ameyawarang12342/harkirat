import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const Header = function ({title}){
    return <div>
      {title}
    </div>
  }

  function CardWrapper({children}){
    console.log(children);
    return <div style={{ border: "2px solid #000000", padding:200 }}>
        <div>hehednejdedmede</div>
        {children}
      </div>
  }

  function HeaderWithApp() {
    const [ title, setTitle ] = useState("Hashir");

    return (
      <>
        <button onClick={() => {
          setTitle(Math.random());
        }}>Change Title</button>
        <div>{title}</div>
      </>
    )
  }

  return (
    <>
      <CardWrapper>
        <Header title="Sameena"/>
      </CardWrapper>
      <CardWrapper>
        <HeaderWithApp/>
      </CardWrapper>
    </>
  )
}

export default App
