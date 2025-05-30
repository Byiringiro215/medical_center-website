import React from 'react'
import  {useState } from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import Aboutus from '../../pages/Aboutus/Aboutus';
import ServicesPage from '../../pages/ServicesPage/ServicesPage';
import Doctors from '../../pages/Doctors/Doctors';
import News from '../News/News';
import ContactPage from '../../pages/ContactPage/ContactPage';
const Navbar = () => {
    const [menu,setMenu]=useState("home");
    const navigate=useNavigate();
  return (
    <div className='navbar'>
      <ul>
        < Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >Home</Link>
        <Link to='/aboutus' onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>About us</Link>
        <Link to='/services' onClick={()=>setMenu("services")} className={menu==="services"?"active":""}>Services</Link>
        <Link to='/doctors' onClick={()=>setMenu("doctors")} className={menu==="doctors"?"active":""}>Doctors</Link>
        <Link to='/news' onClick={()=>setMenu("news")} className={menu==="news"?"active":""}>News</Link>
        <Link to='/contact' onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact</Link>
      </ul>
      <div className="navbar-right">
      <CiSearch size={30} color='white' className='icon' />
      <button onClick={()=>navigate('/appointment')}>Appointment</button>
      </div>
    </div>
  )
}

export default Navbar
