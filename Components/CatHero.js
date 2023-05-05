import './CatHeroStyles.css'

import React from 'react'
import crec from "../assets/catrec.png"
import gp from "../assets/all1.png"
const CatHero = () => {
  return (
    <div className='cat'>
      <div className="cat-container">
        <img className='cate' src={crec} alt="crec" />
        <div className="cathero">
          <img className='grp' src={gp} alt="gp" />
          <h4>Our Best Sellers</h4>
          <p>We've got some amazing gift hampers for you for any occasion! </p>
          <p2>Read More</p2>
        </div>
      </div>
      
    </div>
  )
}

export default CatHero
