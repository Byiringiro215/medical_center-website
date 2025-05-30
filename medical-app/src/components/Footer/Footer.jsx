import React from 'react'
import './Footer.css'
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
const Footer = () => {
    let date=new Date();
    let year=date.getFullYear();
  return (
    <div className='footer'>
      <div className="upperfooter">
        <div className='left'>
            <span>MEDDICAL</span>
            <p>leading the Way in Medical <br />Execellence.Trusted Care</p>
        </div>
        <div className='leftcenter'>
            <h4>Impotant Links</h4>
            <ul>
                <li>Appointment</li>
                <li>Doctors</li>
                <li>Services</li>
                <li>About Us</li>
            </ul>
        </div>
        <div className='rightcenter'>
            <h4>Contact Us</h4>
            <ul>
                <li>Call:+250789442431</li>
                <li>Email:meddical@gmailcom</li>
                <li>Address:0123 Kigali</li>
                <li>Rwanda</li>
            </ul>
        </div>
        <div className='right'>
            <h4>NewsLater</h4>
            <div className="email-input">
            <input type="text" placeholder='Enter your email address' />
            <button><BsFillSendFill size={25} /></button>
                </div>
            
        </div>
      </div>
      <hr />
      <div className="lowerfooter">
        
<p>{year} &copy;MEDDICAL All Rights Reserved by PNTEC-LTD </p>
<div className="footericons">
<TiSocialLinkedinCircular size={30} color="deepskyblue" />
<FaFacebook size={20} color="deepskyblue" />
<FaInstagramSquare size={20} color="deepskyblue" />
</div>

      </div>
    </div>
  )
}

export default Footer
