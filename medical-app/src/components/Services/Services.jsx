import React, { useState } from 'react'
import './Services.css'
import { assets } from '../../assets/assets';
import { PiPillDuotone } from "react-icons/pi";
import { GiHeartPlus } from "react-icons/gi";
import { LuCross } from "react-icons/lu";
import { MdOutlineBloodtype } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
const Services = () => {
    const services=[
        "A passion for Healing",
        "All our best",
        "A legacy of Excellence",
        "5-Star Care",
        "Believe in Us",
        "Always Caring"
    ];
    console.log("Services array:", services); 
    const [hoover,setHoover]=useState("div1");
  return (
    <div className='services'>
      <h2>CARE YOU CAN BELIEVE IN</h2>
      <h1>Our services</h1>
      <div className="all-services-divs" >
        <div className="left">
            <div className="service1" onClick={()=>setHoover("div1")} id={hoover==="div1"?"active":""} >
            <PiPillDuotone  size={50} color='deepskyblue' />
            <p>Free Checkup</p>
            </div>

            <div className="service1" onClick={()=>setHoover("div2")} id={hoover==="div2"?"active":""}>
            <GiHeartPlus  size={50} color='deepskyblue' />
            <p>Cardiogram</p>
            </div>

            <div className="service1" onClick={()=>setHoover("div3")} id={hoover==="div3"?"active":""}>
            <LuCross  size={50} color='deepskyblue' />
            <p>Dna Testing</p>
            </div>

            <div className="service1" onClick={()=>setHoover("div4")} id={hoover==="div4"?"active":""}>
            <MdOutlineBloodtype size={50} color='deepskyblue' />
            <p>Blood Bank</p>
            </div>
            <button>View All</button>
        </div>
        <div className="services-center">
            <h2>A passion for putting patients first.</h2>
          
            <ul>
  {services.map((service, index) => {
    
    return  <li key={index}><GoDotFill color='deepskyblue' size={30} className='service-icons' />{service}</li>;
  })}
</ul>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, deserunt temporibus excepturi corporis fuga recusandae itaque aperiam, sint consequatur ipsum sed. Corrupti repellat eos eligendi soluta magnam magni quasi reprehenderit.</p>
<br />

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum praesentium maiores odit odio vitae magnam! Nihil at dolores, impedit voluptatum minus sit facilis saepe molestiae reiciendis quaerat quae ad!</p>
        </div>
        <div className="right">
            <img src={assets.pregnant_patient} alt="" />
            <img src={assets.three_female_drs} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Services
