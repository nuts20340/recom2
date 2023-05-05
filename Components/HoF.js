import './HoFStyless.css'

import React from 'react'
import bf from "../assets/brec.png"
import log from '../assets/logo.png';
import alf from '../assets/allf.png'
import alfo from '../assets/follow.png'

const HoF = () => {
  return (
    <div className='hof'>
        <div className="hof-categoty">
            <div className="homef">
            <img className='h1' src={bf} alt="bf" />
            <img className='h2' src={log} alt="log" />
            <h1>About Us</h1>
            <p>We are Retail Foods a MSME ( Micro Small & Medium Enterprise) unit that was started in 2019 with the motive to offer consumers quality products bought from the right, direct source in fresh and hygienic condition.</p>
            </div>
            <div className="homef1">
            <h1>Quick Links</h1>
            <h2>Products</h2>
            <h3>Reviews</h3>
            <h4>Products</h4>
            <h5>Reviews</h5>
        </div>
        <div className="homef2">
            <img className='h3' src={alf} alt="alf" />
        </div>
        <div className="homef3">
            <img className='h4' src={alfo} alt="alfo" />
        </div>
        <div className="homef4">
            <h1>Copyright ©2022 All rights reserved by Esor | Powered by CodeMarks</h1>
        </div>
        </div>
      
    </div>
  )
}

export default HoF
