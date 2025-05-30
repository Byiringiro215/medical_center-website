import React from 'react'
import './AboutusHeader.css'
import Home from '../../pages/Home/Home'
import { Link } from 'react-router-dom'
import Aboutus from '../../pages/Aboutus/Aboutus'
const AboutusHeader = () => {
  return (
    <div className='aboutus-header'>
      <div className="aboutus-nav">
        <Link to='/' className='link' >Home</Link><span> /  </span>
        <Link to='/aboutus' className='link' >About</Link>
      </div>
      <h1>About us</h1>
    </div>
  )
}

export default AboutusHeader
