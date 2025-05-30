import './BookingAppointment.css';
import React from 'react'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'
import BookingPart from './BookingPart/BookingPart';
import { LuPhoneCall } from "react-icons/lu";
const BookingAppointment = () => {
  return (
    <>
    <div className='booking-appointment-all'>
       <div className="booking-appointment-nav">
        <Link to='/' className='link' >Home</Link><span> /  </span>
        <Link to='/appointment' className='link' >Appointment</Link>
      </div>
      <div className="book-appointment">
<div className="booking-appointment-left">
<BookingPart/>
</div>
<div className="booking-appointment-right">
    <h1>Shedule hours</h1>
    <div className="paragraphs">
    <p>Monday<span>—</span>09:00Am-07:00 PM</p>
    <p>Tuesday<span>—</span>09:00Am-07:00 PM</p>
    <p>Wednesday<span>—</span>09:00Am-07:00 PM</p>
    <p>Thursday<span>—</span>09:00Am-07:00 PM</p>
    <p>Friday<span>—</span>09:00Am-07:00 PM</p>
    <p>Saturday<span>—</span>Closed</p>
    <p>Sunday<span>—</span>09:00Am-07:00 PM</p>
    </div>
    <hr />

    <div className="bottom">
    <LuPhoneCall size={40} color='#BFD2F8' />
    <div className="call-info">
    <p className='emergency'>Emergency</p>
    <p className='call-number'>(237) 681-812-255</p>
    </div>
    
    </div>
</div>

</div>
<div className="map-image">
<iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d144.9537353156786!3d-37.8162797420215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d55f0a5b%3A0x1cddc82dd5f4f18a!2sGoogle!5e0!3m2!1sen!2sus!4v1615413900123!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2041615.6316784096!2d28.560652195942282!3d-1.9403937935371678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c29654e73840e3%3A0x7490b026cbcca103!2sRwanda!5e0!3m2!1sen!2srw!4v1741277597903!5m2!1sen!2srw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
  {/* <img src={assets.map} alt="" /> */}
</div>
    </div>
 
    </>
  )
}

export default BookingAppointment
