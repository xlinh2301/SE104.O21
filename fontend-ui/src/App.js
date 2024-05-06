// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signup from './components/Signup/signup'
import Login from './components/Login/login'
import Home from './components/Home/home'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App