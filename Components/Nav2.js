import './Nav2Styles.css'

import React from 'react'
import { Link } from 'react-router-dom'

const Nav2 = () => {
  return (
    <div className='nav'>
        <div className="nav-container">
            <div className="naav">
              <Link path to="/">
                <p>Homepage</p>
                </Link>
                <h5> / </h5>
              <div className="naav1">
                <p>Fruit and vegetables</p>
                <h5> / </h5>
                <p1>Carrots from Tomissy Farm</p1>
                <h5> / </h5>

              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Nav2
