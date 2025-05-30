import React from 'react'
import './Header.css'
import { FiPhoneCall } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='header'>
      <h1 className='logo'>MED <span>DICAL</span></h1>
      <div className="all_info">
      <div className='header-left'>
      <FiPhoneCall size={30} color='blue' className='header-icon'  />
     <div>
     <h2>EMERGENCY</h2>
     <span>+250794357849</span>
     </div>
      </div>
      <div  className='header-center'>
      < FaRegClock size={30} color='blue' className='header-icon' />
     <div>
     <h2>WORK HOUR</h2>
     <span>09:00-20:00 Every day</span>
     </div>
      </div>
      <div  className='header-right'>
      <FaLocationDot size={30} color='blue' className='header-icon'  />
     <div>
     <h2>LOCATION</h2>
     <span> <FaLocationDot size={15} color='blue' />0123 Kigali</span>
     </div>
      </div>
      </div>
    </div>
  )
}

export default Header
