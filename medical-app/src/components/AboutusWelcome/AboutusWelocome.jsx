import React from 'react'
import { GoDotFill } from "react-icons/go";
import { assets } from '../../assets/assets';
import './AboutusWelcome.css';
import { ImQuotesRight } from "react-icons/im";
const AboutusWelocome = () => {
    const services=[
        "A passion for Healing",
        "All our best",
        "A legacy of Excellence",
        "5-Star Care",
        "Believe in Us",
        "Always Caring"
    ];
  return (
    <>
    <div className='aboutus-welcome'>
      <div className="aboutus-welcome-left">
<img src={assets.female_drs} alt="" />
      </div>
      <div className="aboutus-welcome-right">
        <h3 className='welcome-h3'>WELCOME TO MEDDICAL</h3>
        <h1 className='welcome-h1'>Best Care for Your <br />Good Health</h1>
        <div className="welcome-service">
        {services.map((service, index) => {
            return  <li key={index}><GoDotFill color='deepskyblue' size={30} className='service-icons' />{service}</li>
        }
        )}
        </div>
        
        <p className='service-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vitae illum doloremque possimus quibusdam fugit magnam? Enim excepturi nulla minus officia sequi, nostrum delectus mollitia ea quia corrupti, laudantium placeat.</p>
        <br />
        <p  className='service-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus, voluptates nostrum similique quas doloremque. Necessitatibus voluptatem voluptates molestias sequi, temporibus soluta fugiat ipsum molestiae! Fugiat inventore dignissimos harum voluptatum.</p>
      </div>
    </div>

    <div className='testimonials'>
    <ImQuotesRight size={50} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit facere, tenetur omnis quis debitis eveniet nemo quibusdam consequatur nulla similique, animi ex aut doloribus deserunt facilis rerum consequuntur quaerat.</p>
        <hr />
        <p className='name'>Jonh Doe</p>
    </div>
    </>
  )
}

export default AboutusWelocome
