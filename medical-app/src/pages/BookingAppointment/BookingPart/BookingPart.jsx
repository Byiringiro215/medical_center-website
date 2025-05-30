import './BookingPart.css';
import React from 'react'

const BookingPart = () => {
  return (
    <div className='booking-part'>
       <div className='booking'>
      <div className='booking-left'>
<h2>Book an Appointment</h2>
<p className='booking-paragraph' >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Natus officiis exercitationem ratione alias iure vitae asperiores <br />laboriosam voluptates maiores nemo aperiam, inventore, molestias sit <br />libero aspernatur rerum laborum. Tempore, neque.</p>
      </div>
      <div className='booking-right'>
<form>
    <div className='firts-2-inputs'>
        <input type="text" placeholder='Name' required />
<select name="" id="" required>
<option value="Gender" >Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
</select>
    </div>
    <div className='second-2-inputs'>
        <input type="email" placeholder='Email' required />
        <input type="tel" placeholder='Phone' required />

    </div>
    <div className='third-2-inputs'>
        <input type="date" placeholder='Date' required />
        <input type="text" placeholder='Any time of the day'/>

    </div>
    <div className='fourth-2-inputs'>
       <select name="" id="">
        <option value="Dr.Iirezi"> Dr.Iirezi</option>
        <option value="Dr.Aaron">Dr.Aaron</option>
        <option value="Dr.Roger">Dr.Roger</option>
       </select>
       <select >
        <option value="Neurology">Neurology</option>
        <option value="Dermatology">Dermatology</option>
        <option value="Opthalmology">Opthalmology</option>
       </select>
    </div>
    <div>
        <textarea placeholder='Message'></textarea>
    </div>
    <button type='submit'>SUBMIT</button>
</form>
      </div>
    </div>
    </div>
  )
}

export default BookingPart
