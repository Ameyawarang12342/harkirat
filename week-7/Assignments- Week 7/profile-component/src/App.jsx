import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot } from 'recoil';
import { SignupForm } from './components/Form';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Profile } from "./components/Profile";

function App() {

  return (
    <>
    <RecoilRoot>  
      <Routes>      
          <Route path="/profileView" element={<Profile />} />
          <Route path="/" element={<SignupForm />} />
      </Routes>
      </RecoilRoot>
    </>
  )
}

export default App
