import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const DashBoard = lazy(() => import('./components/Dashboard'));
const  Landing = lazy(() => import('./components/Landing'));
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      < BrowserRouter>
      <TopBar/>
        <Routes>
          <Route element={<div>Hi There</div>}/>
          <Route path='/Dashboard' element={
            <Suspense fallback="Loading...">
              <DashBoard/>
            </Suspense>
          } />
          <Route path='/' element={
            <Suspense fallback="Loading...">
              <Landing/>
            </Suspense>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

const TopBar = () => {
  const navigate =useNavigate();
  return (
    <div /*style={{background: "black", color: "white"}}*/>
      <button onClick={() => {navigate('/')}}>Home</button>
      <button onClick={() => {navigate('/Dashboard')}}>Dashboard</button>
    </div>
  )
}

export default App
