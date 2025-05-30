import React from 'react'
import './ContactPage.css'
import '../../components/Cards/Contact-card.css'
import ContactCard from '../../components/Cards/Contact-card'
import News from '../../components/News/News'

import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import { LuPhoneCall } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
const ContactPage = () => {
  return (
    
    <div className='contact-page' id='contact'>
       <div className="contact-page-nav">
        <Link to='/' className='link' >Home</Link><span> /  </span>
        <Link to='/contact' className='link' >Contact</Link>
        <h1>Our contacts</h1>
      </div>
      <div className="contact-page-image">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d144.9537353156786!3d-37.8162797420215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d55f0a5b%3A0x1cddc82dd5f4f18a!2sGoogle!5e0!3m2!1sen!2sus!4v1615413900123!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
        {/* <img src={assets.map} alt="" /> */}
      </div>

      <div className="getInTouch">
        <div className="getInTouch-left">
          <h3 className='getInTouch-h3'>GET IN TOUCH</h3>
          <h2 className='getInTouch-h2'>Contact</h2>
          <form action="">
            <div className="first-two">
              <input type="text" placeholder='Name' required />
              <input type="email" placeholder='Email' />
            </div>
            <input type="text" placeholder='Subject' className='subject-input' required /><br />
            <textarea name="" placeholder='Message'  ></textarea><br />
            <button type='submit'>SUBMIT</button><br />
          </form>
        </div>
        <div className="getInTouch-right">
        <ContactCard icon={<LuPhoneCall size={30} color='darkblue' />} title="EMERGENCY" info1="(237) 681-812-255" info2="(237)666-331-894" className='contact1' />
<ContactCard icon={<CiLocationOn size={30} color='darkblue' />} title="LOCATION" info1="(237) 681-812-255" info2="(237)666-331-894"/>
<ContactCard icon={<MdEmail size={30} color='darkblue' />} title="EMAIL" info1="(237) 681-812-255" info2="(237)666-331-894"/>
<ContactCard icon={<CiClock2 size={30} color='darkblue' />} title="WORKING HOURS" info1="(237) 681-812-255" info2="(237)666-331-894"/>
        </div>
      </div>
      <News/>
   
    </div>
    
  )
}

export default ContactPage
