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

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Routes>
          <Route path='/' element={<Home isOpen={isOpen} />}/>
          <Route path='/Servicios'  element={<Servicios isOpen={isOpen} />}/>
          <Route path='/Citas' element={<Citas isOpen={isOpen}/>}/>
          <Route path='/Nosotros' element={<Nosotros isOpen={isOpen}/>}/>
          <Route path='/Noticias' element={<Noticias isOpen={isOpen} />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
