import React from 'react'
//React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import RegisterPage from './Components/RegisterPage'
import Home from './Components/Home'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
