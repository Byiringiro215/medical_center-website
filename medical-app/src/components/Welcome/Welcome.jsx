import React from 'react'
import './Welcome.css'
import {assets} from '../../assets/assets'
import { FaLongArrowAltRight } from "react-icons/fa";
const Welcome = () => {
  return (
    <>
    <div className='welcome'>
        <h2>WELCOME TO MEDDICAL</h2>
        <h1>A Great Place to Receive Care</h1>
        <p>We provide expert, compassionate medical care tailored to your needs.</p>
            <p>From routine check-ups to specialized treatments,  our dedicated team is here to support your well-being. </p>  
          <p>Trust Meddical for quality care you can rely on.</p>
        <button>Learn More<FaLongArrowAltRight color='darkblue' className='arrow' /></button>
    </div>
    <div className="picture">
        <img src={assets.blackdoctors} alt="" />
    </div>
    </>
  )
}

export default Welcome
