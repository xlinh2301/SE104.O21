// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Signup from './components/Signup/signup'
import Login from './components/Login/login'
import Home from './components/Home/home'
import Main from './components/Main/main'
import Caygiapha from './components/Caygiapha/caygiapha'
import Tracuu from './components/Tracuu/tracuu'
import Themthanhvien from './components/Themthanhvien/themthanhvien'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/caygiapha' element={<Caygiapha />} />
        <Route path='/tracuu' element={<Tracuu />} />
        <Route path='/themthanhvien' element={<Themthanhvien />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App