import React from 'react'
import "./Hero.css"
import Testimonial from '../../images/Testimonial image 1.png'

const Hero = () => {
  return (
    <div className='container-fluid mt-5'>
        <div className='row'>
            <div className='col text'>
                <h1>Amazing <br/>Experiences from Our <br/>Wonderful Customers</h1>
                <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>
            <div className='col imag'>
                <div className='bg-color'>
                    <img src={Testimonial} alt="testimonial" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero