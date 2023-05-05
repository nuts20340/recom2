import './BestHStyles.css'

import React from 'react'
import he1 from "../assets/cspice.png"
import he2 from "../assets/dates.png"
import he3 from "../assets/rbox.png"
import he4 from "../assets/cbottlespice.png"
import he5 from "../assets/topi.png"
import he6 from "../assets/Licon.png"
import { Link } from 'react-router-dom'
const BestH = () => {
  return (
    <div className='besthero'>
      <div className="besth-container">
        <div className="herobest1">
        <img className='immmg1' src={he5} alt="Into5" />
      <img className='iimg' src={ he6 } alt=" Into6" />

            <img  className="img1" src={he1} alt="Into1 " />
            <h3>ESOR Drinking Choclate</h3>
            <h5>Drinking Choclate</h5>
            <p>Rs. 1223</p>
            <p1>(36% OFF)</p1>
            <p2>Rs.976</p2>
            <button>Add To Cart</button>
        </div>
        <div className="herobest2">
        <img className='iimg' src={ he6 } alt=" Into6" />

      <img className='immmg1' src={he5} alt="Into5" />
            <img  className="img2" src={he2} alt="Into1 " />
            <h3>ESOR CHOCO CRISPIES</h3>
            <h5>Drinking Choclate</h5>
            <p>Rs. 1223</p>
            <p1>(36% OFF)</p1>
            <p2>Rs.776</p2>
            <button>Add To Cart</button>
        </div>
        <div className="herobest3">
      <img className='iimg' src={ he6 } alt=" Into6" />

      <img className='immmg1' src={he5} alt="Into5" />

            <img  className="img3" src={he3} alt="Into1 " />
            <h3>GIFT BOX</h3>
            <h5>Drinking Choclate</h5>
            <p>Rs. 1223</p>
            <p1>(36% OFF)</p1>
            <p2>Rs.299</p2>
            <Link>
            <button>Add To Cart</button>
            </Link>
        </div>
        <div className="herobest4">
      <img className='iimg' src={ he6 } alt=" Into6" />

      <img className='immmg1' src={he5} alt="Into5" />

            <img  className="img4" src={he4} alt="Into1 " />
            <h3>ESOR CHOCO BUTTER</h3>
            <h5>Drinking Choclate</h5>
            <p>Rs. 1223</p>
            <p1>(36% OFF)</p1>
            <p2>Rs.876</p2>
            <button >Add To Cart</button>
            </div>
      </div>
    </div>
  )
}

export default BestH
