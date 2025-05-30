import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route, Router } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Aboutus from './pages/Aboutus/Aboutus'
import ServicesPage from './pages/ServicesPage/ServicesPage'
import Doctors from './pages/Doctors/Doctors'
import NewsPage from './pages/News/NewsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import BookingAppointment from './pages/BookingAppointment/BookingAppointment'
import Footer from './components/Footer/Footer'
function App() {
  return(
    <>
    <Header/>
    <Navbar/>
   
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/aboutus' element={<Aboutus/>}/>
<Route path='/services'element={<ServicesPage/>}/>
<Route path='/doctors'element={<Doctors/>}/>
<Route path='/news'element={<NewsPage/>}/>
<Route path='/contact'element={<ContactPage/>}/>
<Route path='/appointment'element={<BookingAppointment/>}/>
</Routes>
<Footer/>
  
  
  
    </>
  );

  
}

export default App
