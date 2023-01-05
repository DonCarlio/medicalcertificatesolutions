import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Contacts from './pages/contact/Contacts';
import Footer from './components/footer/Footer';
import Services from './pages/services/Services';
import { MenuProvider } from './hooks/MenuContext';
import {BsWhatsapp} from 'react-icons/bs';

const App = () => {
  return (
    <MenuProvider>
      <BrowserRouter className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contacts />} />
        </Routes>
            <a href="https://wa.me/+14242616933" target='__blank' className='omni'><BsWhatsapp className='omni-chat'/></a>
        <Footer />
      </BrowserRouter>
    </MenuProvider>
  )
}

export default App