import React from 'react'
import HomeHeader from '../../components/HomeHeader/HomeHeader'
import Welcome from '../../components/Welcome/Welcome'
import Services from '../../components/Services/Services'
import Specialists from '../../components/Specialists/Specialists'
import Booking from '../../components/Booking/Booking'
import DoctorSlider from '../../components/Doctors/DoctorSlider'
import News from '../../components/News/News'
import Contact from '../../components/Contact/Contact'
import './Home.css'
const Home = () => {
  return (
    <div className='homepage'>
      <HomeHeader/>
      <Welcome/>
      <Services/>
     <Specialists/>
     <Booking/>
     <DoctorSlider/>
     <News/>
     <Contact/>
   
    </div>
  )
}

export default Home
