import './HeroStyles.css'

import React from 'react';
import Introimg from '../assets/rectangle.png';
import Introimg2 from '../assets/all1.png';

import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero'>
      <img className='img' src={Introimg} alt="Introimg" />

      <div className="mask">

      <img className='img2' src={Introimg2} alt="Introimg2" />
      </div>
        <div className="content">
            <div className="left">
           <h2>We Bring You</h2>
           <p>Food In Their Purest Form</p>
          <Link className=" btn ">Learn More</Link>
          </div>
        </div>
    
   
  </div>
  )
}

export default Hero
