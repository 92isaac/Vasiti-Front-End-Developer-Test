import React from 'react'
import BlackImg from '../../images/black-beautiful-ladies-smiling 1.png'
import Button from '../utilies/Button'

const Blackbg = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col blackImage'>
                <img src={BlackImg} alt="black-beautiful-ladies-smiling" />
            </div>
            <div className='col text-2'>
                <h3>Tolu & Joy’s Experience</h3>
                <Button className='' btnName="Customer" />
                <p>I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back!</p>
                <Button className="" btnName="Share Your Story" />
            </div>
        </div>
    </div>
  )
}

export default Blackbg