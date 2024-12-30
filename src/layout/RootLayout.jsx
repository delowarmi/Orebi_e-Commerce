import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout
