import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import {  Routes, Route } from 'react-router-dom';
import Jurnal from './pages/Jurnal'
import RootLayout from './layout/RootLayout'
import Error from './pages/Error'
import Login from './pages/Login'
import Signup from './pages/Signup'


const App = () => {
  return (
    <div>
        <Routes>
        <Route element={<RootLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/jurnal' element={<Jurnal/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='*' element={<Error/>}/>
        
        </Route>
        </Routes>
    </div>
  )
}

export default App