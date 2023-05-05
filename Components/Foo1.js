import './Foo1Styles.css'

import React from 'react'
import fb from "../assets/brec.png"
import icon from "../assets/logo.png"


const Foo1 = () => {
  return (
    <div className='foo'>
      <img className="f1" src={fb} alt="fb" />
      <div className="foo-container">
        <img className='lo' src={icon} alt="icon" />
        <div className="fooo1">
            <h5>About Us</h5>
            <p>We are Retail Foods a MSME ( Micro Small & Medium Enterprise) unit that was started in 2019 with the motive to offer consumers quality products bought from the right, direct source in fresh and hygienic condition.</p>
        </div>
      </div>
    </div>
  )
}

export default Foo1
