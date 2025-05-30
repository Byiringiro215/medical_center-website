import React from 'react'

import Home from '../Home/Home'
import Contact from '../../components/Contact/Contact'
import { Link } from 'react-router-dom'
import './ServicesPage.css'
import { CgPill } from "react-icons/cg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { assets } from '../../assets/assets'
const ServicesPage = () => {
  const services=[
"Free Checkup",
"Laboratory tests",
"Genetic testing",
"Medical imaging",
"Pharmacy",,
"Physiotherapy",
  ]
  return (
    <>
    <div className='services-page-header' id='services'>
       <div className="services-pages-nav">
        <Link to='/' className='link' >Home</Link><span> /  </span>
        <Link to='' className='link' >Services</Link>
      </div>
      <h1>Our Services</h1>
    </div>
    <div className='services-page-content'>
<div className="service-page-service-container">
  {services.map((service,index)=>{
    return <div className="service-page-service" key={index}>
      <div className="image">
      <img src={assets.pregnant_patient} alt="" />
      </div>

<div className="service-icon">
<CgPill size={20} color='white' className='service-page-icon' />
</div>
<h3 className='service-name'>{service}</h3>
<p className='service-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
<h5 className='learn-more'>Learn More <FaLongArrowAltRight /></h5>

    </div>
  })}
</div>
    </div>
    <Contact/>
   
    </>
  )
}

export default ServicesPage



