import React from 'react'
import './Contact.css'
import ContactCard from '../Cards/Contact-card' 
import { LuPhoneCall } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
const Contact = () => {
  return (
    <div className='contacts'>
      <h3 className='title'>GET IN TOUCH</h3>
      <h2 className='subtitle'>Contact</h2>
      <div className="allcontacts">
      <ContactCard icon={<LuPhoneCall size={30} color='darkblue' />} title="EMERGENCY" info1="(237) 681-812-255" info2="(237)666-331-894" className='contact1' />
<ContactCard icon={<CiLocationOn size={30} color='darkblue' />} title="EMERGENCY" info1="(237) 681-812-255" info2="(237)666-331-894"/>
<ContactCard icon={<MdEmail size={30} color='darkblue' />} title="EMERGENCY" info1="(237) 681-812-255" info2="(237)666-331-894"/>
<ContactCard icon={<CiClock2 size={30} color='darkblue' />} title="EMERGENCY" info1="(237) 681-812-255" info2="(237)666-331-894"/>
      </div>


    </div>
  )
}

export default Contact
