import React from 'react'
import './Doctors.css'
import { Link } from 'react-router-dom'
import { doctors } from '../../assets/assets'
const Doctors = () => {
  return (
    <div className='doctors-page' id='doctors'>
      <div className="doctors-page-nav">
        <Link to='/' className='link' >Home</Link><span> /  </span>
        <Link to='/doctors' className='link' >Doctors</Link>
        <h1>Our Doctors</h1>
      </div>
<div className="doctors-part">
{doctors.map((doctor,index)=>{
return <div className="doctor">
  <div className="doctor-image">
    <img src={doctor.image} alt="" />
    </div>
    <h4>{doctor.name}</h4>
    <h5>{doctor.title}</h5>
    <p>{doctor.description}</p>
 
</div>
})}
</div>
    </div>
  )
}

export default Doctors
