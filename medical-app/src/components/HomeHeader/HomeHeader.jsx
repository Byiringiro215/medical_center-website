import React from 'react'
import './HomeHeader.css'
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
const HomeHeader = () => {
  return (
    <>
    <div className='home_header'>

      <h3 className='home-h3'>CARING FOR LIFE</h3>
      <h1 className='home-h1'>Leading the Way <br /> in Medical Excellence</h1>
      <button className='btn'>Our Services</button>
    </div>
    <div className="appointments">
      <div className="appointment1">
        <p>Book an Appointment</p>
        <FaCalendarAlt size={50} color='white' className='calender-icon' />
      </div>
      <div className="appointment2">
      <p>Book an Appointment</p>
      <FaUsers size={80} color='darkblue' />
      </div>
      <div className="appointment3">
      <p>Book an Appointment</p>
      <CiMoneyBill size={80} color='white' />
      </div>
    </div>
    </>
  )
}

export default HomeHeader
