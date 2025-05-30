import React from 'react'
import './Aboutus.css'
import AboutusHeader from '../../components/AboutusHeader/AboutusHeader'
import AboutusWelocome from '../../components/AboutusWelcome/AboutusWelocome'
import DoctorSlider from '../../components/Doctors/DoctorSlider'
import News from '../../components/News/News'
import Contact from '../../components/Contact/Contact'

const Aboutus = () => {
  return (
    <div className='aboutus-page' id='aboutus'>
        <AboutusHeader/>
        <AboutusWelocome/>
        <DoctorSlider/>
        <News/>
        <Contact/>
       
    </div>
  )
}

export default Aboutus
