import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./DoctorSlider.css";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { assets } from "../../assets/assets";

const doctors = [
  {
    name: "Justin",
    specialty: "Neurology",
    image:  assets.m_dr, 
  },
  {
    name: "Kagy",
    specialty: "Dentist",
    image: assets.male_doc,
  },
  {
    name: "Sylivia",
    specialty: "Dermatologist",
    image:assets.fm_dr,
  },
  {
    name: "Justin",
    specialty: "Neurology",
    image:  assets.m_dr, 
  },
  {
    name: "Kagy",
    specialty: "Dentist",
    image: assets.male_doc,
  },
  {
    name: "Sylivia",
    specialty: "Dermatologist",
    image:assets.fm_dr,
  },
];

const DoctorSlider = () => {
  return (
    <div className="doctors">
    <h2>TRUSTED CARE</h2>
    <h1>Our Doctors</h1>
    <div className="slider-container">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={3} 
        
        pagination={{ clickable: true }}
        loop={true}
      >
        {doctors.map((doctor, index) => (
          <SwiperSlide key={index} className="slide">
            <div className="doctor-card">
              <img src={doctor.image} alt={doctor.name} />
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
                <div className="icons">
                  
                  <span><TiSocialLinkedinCircular size={40} color="deepskyblue" /></span>
                  <span><FaFacebook size={30} color="deepskyblue" /></span>
                  <span><FaInstagramSquare size={30} color="deepskyblue" /></span>
                </div>
                <button className="profile-btn">View Profile</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default DoctorSlider;
