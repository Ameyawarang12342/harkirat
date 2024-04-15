import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Details from './pages/Details'
import Interest from './pages/Interest'
import SocialMedia from './pages/SocialMedia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Details />} />
          <Route path='/interest' element={<Interest />} />
          <Route path='/socialmedia' element={<SocialMedia />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
