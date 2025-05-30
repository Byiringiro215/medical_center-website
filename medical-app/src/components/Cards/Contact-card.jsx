import React from 'react'
import './Contact-card.css'
const ContactCard = (props) => {
  return (
    <div className='card'>
      <span>{props.icon}</span>
      <h3>{props.title}</h3>
      <p>{props.info1}</p>
      <p>{props.info2}</p>
    </div>
  )
}

export default ContactCard
