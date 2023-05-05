import './BestFStyles.css'

import React from 'react'
import bf from "../assets/brec.png"
import log from '../assets/logo.png';
import alf from '../assets/allf.png'
import alfo from '../assets/follow.png'
const BestF = () => {
  return (
    <div className='bestF'>
      <div className="besf-container">
        <div className="bestt">
            <img className='b1' src={bf} alt="bf" />
            <img className='b2' src={log} alt="log" />
            <h1>About Us</h1>
            <p>We are Retail Foods a MSME ( Micro Small & Medium Enterprise) unit that was started in 2019 with the motive to offer consumers quality products bought from the right, direct source in fresh and hygienic condition.</p>
        </div>
        <div className="bestt1">
            <h1>Quick Links</h1>
            <h2>Products</h2>
            <h3>Reviews</h3>
            <h4>Products</h4>
            <h5>Reviews</h5>
        </div>
        <div className="bestt2">
            <img className='b3' src={alf} alt="alf" />
        </div>
        <div className="bestt3">
            <img className='b4' src={alfo} alt="alfo" />
        </div>
        <div className="bestt4">
            <h1>Copyright ©2022 All rights reserved by Esor | Powered by CodeMarks</h1>
        </div>
      </div>
    </div>
  )
}

export default BestF
