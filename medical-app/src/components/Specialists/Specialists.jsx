import React, { useState } from 'react'
import './Specialists.css'
import { FaHeartbeat } from "react-icons/fa";
const Specialists = () => {
    const specialists=[
        "Neurology",
        "Bones",
        "Oncology",
        "Otorhinolaryngology",
        "Ophthalmology",
        "Cardiovascular",
        "Pulmonary",
        "Renal Medicine",
        "Gastroenterology",
        "Urology",
        "Dermatology",
        "Gynaecology"
    
    ];

  return (
    <div className='specialists'>
      <h3>ALWAYS CARING</h3>
      <h2>Our Specialists</h2>
      <div className="all-specialists">
      {specialists.map((specialist,index)=>{

return <div className="specialist" key={index}  >
<FaHeartbeat size={60} color='deepskyblue' />
{specialist}
</div>
})}
      </div>
      
    </div>
  )
}

export default Specialists
