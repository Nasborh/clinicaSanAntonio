import { useState } from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router'
import { Header } from './pages/Header'
import { Home } from './pages/Home'
import { Nosotros } from './pages/Nosotros'
import { Noticias } from './pages/Noticias'
import { Footer } from './pages/Footer'
import { Servicios } from './pages/Servicios'
import { Citas } from './pages/Citas'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Servicios' element={<Servicios/>}/>
          <Route path='/Citas' element={<Citas/>}/>
          <Route path='/Nosotros' element={<Nosotros />}/>
          <Route path='/Noticias' element={<Noticias />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
